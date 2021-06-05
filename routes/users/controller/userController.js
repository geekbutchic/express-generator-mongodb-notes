// USER IS COMING FROM MONGODB SCHEMA
const User = require("../model/User");

// EXPORTING AN OBJECT WITH KEY AND VALUE
module.exports = {
  getAllUsers: function (callback) { 
    User.find({}, function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  
};
