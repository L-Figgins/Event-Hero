const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/HoneyHive')
  .then(() => {
    console.log('mongodb connected');
    mongoose.Promse = global.Promise;
  })
  .catch(err => {
    console.log('error connecting: ', err);
  });

module.exports = mongoose;
