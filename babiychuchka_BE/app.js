const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Painting = require('./models/Painting');

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
      title: 'Da Vinci',
      description: 'my first painting',
      available: true,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    },
    {
      id: '2',
      title: 'first one',
      description: 'my first painting',
      available: true,
      url: 'https://www.worldhistory.org/img/r/p/500x600/15460.png?v=1647612336',
    },
    {
      id: '3',
      title: 'first one',
      description: 'my first painting',
      available: false,
      url: 'https://fadmagazine.com/wp-content/uploads/Screen-Shot-2021-04-20-at-14.37.11.png',
    },
    {
      id: '4',
      title: 'first one',
      description: 'my first painting',
      available: true,
      url: 'https://mymodernmet.com/wp/wp-content/uploads/2021/07/famous-portraits-17.webp',
    },
    {
      id: '5',
      title: 'first one',
      description: 'my first painting',
      available: false,
      url: 'https://i.pinimg.com/originals/c9/59/93/c95993eee375294d9a80abf1c5e6e989.jpg',
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
