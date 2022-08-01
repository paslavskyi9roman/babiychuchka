const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Poetry = new Schema(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    date: {
      type: String,
    },
  },
  {
    collection: 'poems',
  }
);
module.exports = mongoose.model('Poetry', Poetry);
