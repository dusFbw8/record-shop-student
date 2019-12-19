const mongoose = require("mongoose");
const RecordModel = require("../models/Record_Model");
const OrderModel = require("../models/Order_Model");
const UserModel = require("../models/User_Model");
const faker = require("faker");

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
  //USER PART
  const userPromises = Array(10)
    .fill(null)
    .map(() => {
      const user = new UserModel({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      });
      return user.save();
    });
  await Promise.all(userPromises);
  //RECORD PART
  const recordPromises = Array(10)
    .fill(null)
    .map(() => {
      const record = new RecordModel({
        title: faker.name.title(),
        artist: faker.name.findName(),
        year: faker.date.past(),
        img: faker.image.image(),
        price: faker.commerce.price()
      });
      return record.save();
    });
  await Promise.all(recordPromises);
  //ORDER PART
  const orderPromises = Array(10)
    .fill(null)
    .map(() => {
      const order = new OrderModel({
        quantity: faker.random.number(),
        record: faker.random.number()
      });
      return order.save();
    });
  await Promise.all(orderPromises);

  mongoose.connection.close();
})();
