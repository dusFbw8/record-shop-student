var low = require("lowdb"); //low
var FileSync = require("lowdb/adapters/FileSync"); //low
var shortid = require("shortid");

var adapter = new FileSync("db.json"); //low
var db = low(adapter); //low
exports.getRecords = (req, res, next) => {
  var result = db
    .get("records")
    .find()
    .value();
  res.send(result);
  next();
};
exports.pushRecord = (req, res, next) => {
  db.get("records")
    .push({
      id: shortid.generate(),
      title: "NEW1",
      artist: "NEW1",
      year: 2020,
      image: "www.",
      price: 2929
    })
    .write();
  res.send("posted");
  next();
};
