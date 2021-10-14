var db = require('../db');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users', function(err, results, fields) {
        if(err) reject(err);
        resolve(results);
      });
    });
  },
  create: function ({username: userName}) {
    return new Promise((resolve, reject) => {
      db.query(`INSERT IGNORE INTO users (userName) VALUES ("${userName}")`,function(err, results, fields) {
        if(err) reject(err);
        resolve(results);
      });
    })
  }
};
