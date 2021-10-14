var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll().then((value) => {
      console.log('this is g from controllers ', value);
      res.send(value);
      // // res.end();
    });
    // res.end('We get the endpoint');
  }, // a function which handles a get request for all messages
  post: function (req, res) {} // a function which handles posting a message to the database
};

