var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll().then((value) => {
      res.send(value);
    });
  },
  post: function (req, res) {
    // console.log(req.body);
    models.users.create(req.body).then((value) => {
      res.send(value);
    });
  }
};
