const express = require('express');
const router = express.Router();

const auth = require('./auth');

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

router.post('/login', auth.registerNewUser);

module.exports = router;
