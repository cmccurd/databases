var db = require('../db/index.js');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) reject(error);
        resolve(results);
      });
    });
  }, // a function which produces all the messages
  create: function ({ roomname, text, username}) {
    return new Promise((resolve, reject) => {
      console.log(username);
      db.query(`INSERT INTO messages (roomName, text, userName, user_id) VALUES ("${roomname}", "${text}", "${username}", (SELECT id FROM users WHERE userName = "${username}"))`, function (error, results, fields) {
        if (error) reject(error);
        resolve(results);
      });
    });
  } // a function which can be used to insert a message into the database
};
