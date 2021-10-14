var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM messages AS solution', function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
      // callback(results);
    });
  }, // a function which produces all the messages
  create: function ({ messages_id, roomName, text, createdAt, userName, user_id }, callback) {
    db.query(`INSERT INTO messages (messages_id, roomName, text, createdAt, userName, user_id) VALUES (${messages_id}, ${roomName}, ${text}, ${createdAt}, ${userName}, ${user_id})`, function (error, results, fields) {
      if (error) throw error;
      console.log('This was made');
      // callback(results);
    });
  } // a function which can be used to insert a message into the database
};

