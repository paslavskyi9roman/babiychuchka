const express = require('express');
const Painting = require('../models/Painting');

const router = express.Router();

router.post('/api/paintings', (req, res, next) => {
  const painting = new Painting({
    title: req.body.title,
    id: req.body.id,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    available: req.body.available,
  });
  painting.save();
  res.status(201).json({
    message: 'Painting added successfully',
  });
});

router.put('/:id', (req, res, next) => {
  const painting = new Painting({
    title: req.body.title,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    available: req.body.available,
  });
  Painting.updateOne({ id: req.params.id }, painting).then((result) => {
    res.status(200).json({ message: 'Painting updated successfully' });
  });
});

router.get('', (req, res, next) => {
  Painting.find().then((documents) => {
    res.status(200).json({
      message: 'Paintings fetched successfully!',
      paintings: documents,
    });
  });
});

router.get('/:id', (req, res, next) => {
  Painting.findById(req.params.id).then((painting) => {
    if (painting) {
      res.status(200).json(painting);
    } else {
      res.status(404).json({ message: 'Painting not found' });
    }
  });
});

router.delete('/:id', (req, res, next) => {
  Painting.deleteOne({ id: req.params.id }).then((result) => {
    res.status(200).json({ message: 'Painting deleted' });
  });
});

module.exports = router;
