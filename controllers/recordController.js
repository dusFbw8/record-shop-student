//MONGOOSE

const RecordModel = require("../models/record");

exports.getRecords = (req, res, next) => {
  RecordModel.find().then(result => {
    res.send(result);
  });
};
