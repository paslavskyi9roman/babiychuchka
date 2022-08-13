const express = require('express');
const app = express();
const paintingRoute = express.Router();
let Painting = require('../model/Painting');

// Add Painting
paintingRoute.route('/add-painting').post((req, res, next) => {
  Painting.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get all Paintings
paintingRoute.route('/').get((req, res) => {
  Painting.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Painting
paintingRoute.route('/painting/:id').get((req, res) => {
  Painting.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Painting
paintingRoute.route('/update-painting/:id').put((req, res, next) => {
  Painting.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log('Painting updated successfully!');
      }
    }
  );
});
// Delete Painting
paintingRoute.route('/delete-painting/:id').delete((req, res, next) => {
  Painting.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = paintingRoute;
