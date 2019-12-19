const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecordsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});
const RecordModel = mongoose.model("Record", RecordsSchema);
module.exports = RecordModel;
