const mongoose = require('mongoose');

const PoetrySchema = mongoose.Schema(
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
module.exports = mongoose.model('Poetry', PoetrySchema);
