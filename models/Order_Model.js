const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema({
  quantity: {
    type: Number,
    required: true
  },
  record: {
    type: Number,
    required: true
  }
});
const OrderModel = mongoose.model("Order", OrdersSchema);
module.exports = OrderModel;
