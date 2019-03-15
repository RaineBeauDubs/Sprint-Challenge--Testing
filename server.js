const express = require('express');

const server = express();
server.use(express.json());

const games = [
  {
    title: 'Pacman',
    genre: 'Arcade',
    releaseYear: 1980
  },
  {
    title: 'Donkey Kong',
    genre: 'Arcade',
    releaseYear: 1981
  },
  {
    title: 'Space Invaders',
    genre: 'Arcade',
    releaseYear: 1978
  },
  {
    title: 'Asteroids',
    genre: 'Arcade',
    releaseYear: 1979
  },
  {
    title: 'Ms. Pacman',
    genre: 'Arcade',
    releaseYear: 1982
  },
];

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the Testing SC!</h2>`)
});

server.get('/games', (req, res) => {
  res
    .status(200)
    .json(games);
});

server.post('/games', (req, res) => {
  if (req.body.title && req.body.genre !== undefined) {
    games.push(req.body)
    res
      .status(200)
      .json(games)
  } else {
    res
      .status(422)
      .json({
        message: 'Nope.'
      })
  }
});

module.exports = server;
