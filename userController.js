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
exports.getRecordsId = (req, res, next) => {
  var id = req.params.id;
  var result = db
    .get("records")
    .find({ id: id })
    .value();
  res.send(result.title);
  next();
};
exports.deleteRecordsId = (req, res, next) => {
  var id = req.params.id;
  if (
    db
      .get("records")
      .find({ id: id })
      .value()
  ) {
    var result = db
      .get("records")
      .remove({ id: id })
      .write();
    res.send("Title deleted");
  } else {
    res.send("No such an ID");
  }
  next();
};
exports.putRecord = (req, res, next) => {
  var id = req.params.id;
  if (
    db
      .get("records")
      .find({ id: id })
      .value()
  ) {
    var result = db
      .get("records")
      .find({ id: id })
      .assign({
        title: "updatedNew",
        artist: "updatedArtist",
        year: 2021,
        image: "www.",
        price: 2921
      })
      .write();
    res.send("Database is updated");
  } else {
    res.send("No such an ID");
  }
  next();
};