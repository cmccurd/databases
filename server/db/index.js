var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

var connection = mysql.createConnection({
  user: 'root',
  password: 'cam',
  database: 'chat'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

//exports.db = connection;
module.exports = connection;

/*
exports.db <--- not advisable
 exports = {
   db: connection
 }
 db.db.query()

////////////////

this is for modules.exports
 exports = connection

 */