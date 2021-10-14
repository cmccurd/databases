var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll().then((value) => {
      res.send(value);
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    // console.log(req.body);
    models.messages.create(req.body).then((value) => {
      res.send(value);
    });
  } // a function which handles posting a message to the database
};

