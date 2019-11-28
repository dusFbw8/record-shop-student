/** EXTERNAL DEPENDENCIES */
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("./middleware/corsMiddleware");
//LOWDB
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);
//shortid
var shortid = require("shortid");
/** ROUTERS */
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

/** INIT */
const app = express();

db.defaults({
  records: []
}).write();

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
app.use("/", indexRouter);
app.use("/api", apiRouter);

/** EXPORT PATH */
module.exports = app;
