// // USER IS COMING FROM MONGODB SCHEMA
// const User = require("../model/User");

// // EXPORTING AN OBJECT WITH KEY AND VALUE
// // CALL-BACK VERSION
// module.exports = {
//   getAllUsers: function (callback) {
//     User.find({}, function (err, payload) {
//       // err = true
//       if (err) {
//         // TRUTHY VALUE
//         callback(err, null);
//       } else {
//         callback(null, payload);
//       }
//     });
//   },
//   createUser: function (body, callback) {
//     // MONGOOSE METHOD
//     console.log(body);
//     let savedUser = new User({
//       // DOES NOT NEED TO BE IN ORDER
//       firstName: body.firstName,
//       lastName: body.lastName,
//       password: body.password,
//       email: body.email,
//       username: body.username,
//     });
//     console.log(savedUser);
//     savedUser.save(function (err, payload) {
//       // SAVES TO DATABASE
//       // ASSIGNS A UNIQUE ID
//       if (err) {
//         callback(err, null);
//       } else {
//         callback(null, payload);
//       }
//     });
//   },
//   updateUserByID: function (id, body, callback) {
//     User.findByIdAndUpdate(
//       { _id: id }, // MONGODB SPECIFIC {_id: id}
//       body, // POSTMAN
//       { new: true }, // NEEDED GIVES BACK OBJECT BEFORE UPDATED
//       function (err, updatedPayload) {
//         if (err) {
//           callback(err, null);
//         } else {
//           callback(null, updatedPayload);
//         }
//       }
//     );
//   },
//   deleteUserByID: function (id, callback) {
//     User.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
//       if (err) {
//         callback(err, null);
//       } else {
//         callback(null, deletedPayload);
//       }
//     });
//   },
// };



// ================== PROMISE VERSION ===========================

// USER IS COMING FROM MONGODB SCHEMA
const User = require("../model/User");
const bcrypt = require("bcryptjs");
// HASH PASSWORD LIBRARY

// PROMISE VERSION
module.exports = {
  getAllUsers: function () {
    return new Promise((resolve, reject) => {
      User.find({})
        .then((payload) => {
          resolve(payload);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }, //CREATE USER
  createUser: function (body) {
    //WRAPPING PROMISE FOR THIS ENTIRE FUNCTION
    return new Promise((resolve, reject) => {
      bcrypt
        .genSalt(10) //METHOD
        .then((salt) => {
          //RESULT
          return bcrypt.hash(body.password, salt); //RETURNS SALT
        })
        .then((hashedPassword) => {
          let savedUser = new User({
            firstName: body.firstName,
            lastName: body.lastName,
            password: hashedPassword,
            email: body.email,
            username: body.username,
          });
          return savedUser.save();
        })
        .then((savedUser) => {
          resolve(savedUser);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  updateUserByID: function (id, body) {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate({ _id: id }, body, { new: true })
        .then((updatedUser) => resolve(updatedUser))
        .catch((error) => reject(error));
    });
  },
  deleteUserByID: function (id, callback) {
    return new Promise((resolve, reject) => {
      User.findByIdAndRemove({ _id: id })
        .then((deletedUser) => resolve(deletedUser))
        .catch((error) => reject(error));
    });
  },
};
