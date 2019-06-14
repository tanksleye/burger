var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.selectAll("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.selectAll("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.selectAll("burgers", condition, function(res) {
      cb(res);
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
