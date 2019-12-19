/** EXTERNAL DEPENDENCIES */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("./middleware/corsMiddleware");
//MONGOOSE
const mongoose = require("mongoose");
(async function() {
  mongoose.connect("mongodb://127.0.0.1/record-shop", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on("error", console.error);
  mongoose.connection.on("open", () => {
    console.log("Data connection established");
  });
})();

/* //LOWDB
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter); */
//shortid
//var shortid = require("shortid");
/** ROUTERS */
const apiRouter = require("./routes/api");

/** INIT */
const app = express();

/* db.defaults({
  records: []
}).write(); */

/** LOGGING */
app.use(logger("dev"));

/** REQUEST PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//**CORS */
app.use(cors);
/** STATIC FILES*/
app.use(express.static(path.join(__dirname, "public")));

/** ROUTES */
app.use("/", apiRouter);
//ERROR

app.use((req, res, next) => {
  const error = new Error("Database error");
  error.status = 400;
  next(error);
});
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});
/** EXPORT PATH */
module.exports = app;
