const UserModel = require("../models/User_Model");

exports.getUsers = (req, res, next) => {
  UserModel.find().then(result => {
    res.send(result);
  });
};

/* exports.postRecord = (req, res, next) => {
  db.get("records")
    .push({
      id: shortid.generate(),
      title: req.body.title,
      artist: req.body.artist,
      year: req.body.year,
      image: req.body.image,
      price: req.body.price
    })
    .write();
  res.send("updated");
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
}; */
