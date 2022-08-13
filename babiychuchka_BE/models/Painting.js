const mongoose = require('mongoose');

const paintingSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
    imgUrl: {
      type: String,
    },
  },
  {
    collection: 'paintings',
  }
);

module.exports = mongoose.model('Painting', paintingSchema);
