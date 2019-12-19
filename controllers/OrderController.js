const OrderModel = require("../models/Order_Model");

exports.getOrders = (req, res, next) => {
  OrderModel.find().then(result => {
    res.send(result);
  });
};
