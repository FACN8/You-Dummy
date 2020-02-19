const dbConnection = require('../database/db_connection');

const getAllusers = cb => {
  dbConnection.query('SELECT * FROM users;', (err, res) => {
    if (err) return cb(err);
    cb(null, res.rows);
  });
};

const addNewUser = (username, password, cb) => {
  dbConnection.query(
    'INSERT INTO users(user_name,password) VALUES($1,$2);',
    [username, password],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

module.exports = {
  getAllusers,
  addNewUser
};
