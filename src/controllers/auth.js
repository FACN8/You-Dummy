const bcrypt = require('bcrypt');
const { addNewUser } = require('../models');

exports.registerNewUser = (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return err;
    addNewUser(username, hash, err => {
      if (err) return err;
      res.render('login');
    });
  });
};
