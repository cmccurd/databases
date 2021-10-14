var db = require('../db/index.js');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM messages', function (error, results, fields) {
        if (error) reject(error);
        // console.log('The solution is: ', results);
        resolve(results);
      });
    });
  }, // a function which produces all the messages
  create: function ({ roomName, text, createdAt, userName, user_id }, callback) {
    db.query(`INSERT INTO messages (roomName, text, createdAt, userName, user_id) VALUES (${roomName}, ${text}, ${createdAt}, ${userName}, ${user_id})`, function (error, results, fields) {
      if (error) throw error;
      console.log('This was made');
      // callback(results);
    });
  } // a function which can be used to insert a message into the database
};

// function ({ messages_id, roomName, text, createdAt, userName, user_id }, callback) {
//   db.query(`INSERT INTO messages (messages_id, roomName, text, createdAt, userName, user_id) VALUES (${messages_id}, ${roomName}, ${text}, ${createdAt}, ${userName}, ${user_id})`, function (error, results, fields) {
//     if (error) throw error;
//     console.log('This was made');
//     // callback(results);
//   });
// } // a function which can be used to insert a message into the database