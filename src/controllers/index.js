const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('landing');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('register');
});

router.post('/home', (req, res) => {
  res.send('home');
});

module.exports = router;
