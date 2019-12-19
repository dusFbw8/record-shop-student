const mongoose = require('mongoose');
const UserModel = require('../models/user');
const OrderModel = require('../models/order');
const RecordModel = require('../models/record');
const faker = require('faker');

    (async function () {
        mongoose.connect('mongodb://localhost:27017/record-shop', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,

        });

        mongoose.connection.on('error', console.error);
        mongoose.connection.on('open', () => {
            console.log('Database connection established');
            
        })

        try {
               await UserModel.deleteMany({});
               await OrderModel.deleteMany({});
               await RecordModel.deleteMany({});
        } catch (err) {
            console.error(err);
            
        }
     
        

         const userPromises = Array(10).fill(null).map(() => {
             const user = new UserModel({
            firstname: faker.name.firstName(),
            lastname: faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.name.lastName(),
            

        })

          return user.save()
        })
        try {
            await Promise.all(userPromises)
        } catch (err) {
            console.error(err)
        }


        const orderPromises = Array(10).fill(null).map(() => {
            const order = new OrderModel({
                quantity: faker.random.number(),
                record: faker.random.number(),
           
        })

        return order.save()
      })
      try {
          await Promise.all(orderPromises)
      } catch (err) {
          console.error(err)
      }
        
      const recordPromises = Array(10).fill(null).map(() => {
        const record = new RecordModel({
       title: faker.name.title(),
       artist: faker.name.lastName(),
       year: faker.random.number(),
       img: faker.name.lastName(),
       price: faker.random.number(),


    })

    return record.save()
  })
  try {
      await Promise.all(recordPromises)
  } catch (err) {
      console.error(err)
  }


        mongoose.connection.close()
            
})()