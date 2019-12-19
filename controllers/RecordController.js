//MONGOOSE
const RecordModel = require("../models/Record_Model");

exports.getRecords = (req, res, next) => {
  RecordModel.find().then(result => {
    res.send(result);
  });
};
