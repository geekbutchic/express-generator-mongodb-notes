// USER IS COMING FROM MONGODB SCHEMA
const User = require("../model/User");

// EXPORTING AN OBJECT WITH KEY AND VALUE
module.exports = {
  getAllUsers: function (callback) {
    User.find({}, function (err, payload) {
        // err = true
      if (err) { // TRUTHY VALUE
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  createUser: function (body, callback) {
    // MONGOOSE METHOD
    console.log(body);
    let savedUser = new User({ 
      // DOES NOT NEED TO BE IN ORDER
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      username: body.username,
    });
    console.log(savedUser);
    savedUser.save(function (err, payload) {
      // SAVES TO DATABASE
      // ASSIGNS A UNIQUE ID 
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
};
