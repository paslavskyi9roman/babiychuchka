const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Painting = require('./models/Painting');

mongoose
  .connect('mongodb+srv://@cluster0.hc5onky.mongodb.net/babiychuchka?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/paintings', (req, res, next) => {
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

app.get('/api/paintings', (req, res, next) => {
  Painting.find().then((documents) => {
    res.status(200).json({
      message: 'Paintings fetched successfully!',
      paintings: documents,
    });
  });
});

app.delete('/api/paintings/:id', (req, res, next) => {
  Painting.deleteOne({ id: req.params.id }).then((result) => {
    res.status(200).json({ message: 'Painting deleted' });
  });
});

app.get('/api/poetry', (req, res, next) => {
  const poetry = [
    {
      id: '1',
      title: 'ghowfk;ALFak',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      date: '01/01/2018',
    },
    {
      id: '2',
      title: 'snagjlsdgknsgnklas',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      date: '01/01/2018',
    },
    {
      id: '3',
      title: 'hgshgsoierouergh',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      date: '01/01/2018',
    },
    {
      id: '4',
      title: 'ryqoirqwroyqro',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      date: '01/01/2018',
    },
  ];
  res.status(200).json({
    message: 'Poetry fetched successfully!',
    poetry: poetry,
  });
});

module.exports = app;
