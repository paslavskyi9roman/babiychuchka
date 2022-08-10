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
    url: req.body.url,
    available: req.body.available,
  });
  console.log(painting);
  res.status(201).json({
    message: 'Painting added successfully',
  });
});

app.get('/api/paintings', (req, res, next) => {
  const paintings = [
    {
      id: '1',
      title: 'first one',
      description: 'my first painting',
      available: true,
      url: 'https://i.imgur.com/aoKy5Kz.jpeg',
    },
    {
      id: '2',
      title: 'first one',
      description: 'my first painting',
      available: true,
      url: 'https://i.imgur.com/kL2e54i.jpeg',
    },
    {
      id: '3',
      title: 'first one',
      description: 'my first painting',
      available: false,
      url: 'https://i.imgur.com/7NzhnpK.jpeg',
    },
    {
      id: '4',
      title: 'first one',
      description: 'my first painting',
      available: true,
      url: 'https://i.imgur.com/zKpAcaY.jpg',
    },
    {
      id: '5',
      title: 'first one',
      description: 'my first painting',
      available: false,
      url: 'https://i.imgur.com/5YVm92y.jpg',
    },
    {
      id: '6',
      title: 'asd asd adfasf',
      description: 'my first painting',
      available: true,
      url: 'https://i.imgur.com/C1Tiu0P.jpg',
    },
    {
      id: '7',
      title: 'first one',
      description: 'my first painting',
      available: true,
      url: 'https://i.imgur.com/HJSVFfA.jpg',
    },
    {
      id: '8',
      title: 'first one',
      description: 'my first painting',
      available: false,
      url: 'https://i.imgur.com/ofLOvTf.jpg',
    },
    {
      id: '9',
      title: 'first one',
      description: 'my first painting',
      available: true,
      url: 'https://i.imgur.com/2ZUEcSY.jpg',
    },
    {
      id: '10',
      title: 'first one',
      description: 'my first painting',
      available: false,
      url: 'https://i.imgur.com/JKxiVaz.jpg',
    },
    {
      id: '11',
      title: 'first one',
      description: 'my first painting',
      available: false,
      url: 'https://i.imgur.com/E9uYhBi.jpg',
    },
    {
      id: '12',
      title: 'first one',
      description: 'my first painting',
      available: true,
      url: 'https://i.imgur.com/gdS4iMz.jpg',
    },
    {
      id: '13',
      title: 'first one',
      description: 'my first painting',
      available: false,
      url: 'https://i.imgur.com/Sk1jMo6.jpg',
    },
  ];
  res.status(200).json({
    message: 'Paintings fetched successfully!',
    paintings: paintings,
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
