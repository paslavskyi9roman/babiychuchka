const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Painting = new Schema(
  {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    available: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  {
    collection: 'paintings',
  }
);
module.exports = mongoose.model('Painting', Painting);
