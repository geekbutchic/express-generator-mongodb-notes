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
// const User = require("../model/User");
// const bcrypt = require("bcryptjs");
// // HASH PASSWORD LIBRARY

// // PROMISE VERSION GET ALL USERS
// module.exports = {
//   getAllUsers: function () {
//     return new Promise((resolve, reject) => {
//       User.find({})
//         .then((payload) => {
//           resolve(payload);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }, // CREATE USER PROMISE VERSION
//   createUser: function (body) {
//     return new Promise((resolve, reject) => {
//       //ASYNCHRONOUS
//       bcrypt
//         .genSalt(10) // GENERATES SALT
//         .then((salt) => { // RETURNS SALT
//           // NO LONGER NEED TO USE CALLBACK
//           return bcrypt.hash(body.password, salt); //RETURNS HASHED PASSWORD
//         })
//         .then((hashedPassword) => {
//           let savedUser = new User({
//             firstName: body.firstName,
//             lastName: body.lastName,
//             password: hashedPassword,
//             email: body.email,
//             username: body.username,
//           });
//           return savedUser.save(); // RETURNS SAVED USER
//         })
//         .then((savedUser) => { // SENDS TO .THEN IN ROUTER
//           resolve(savedUser); // PAYLOAD
//         })
//         .catch((error) => { // ERR
//           reject(error);
//         });
//     });
//   },// UPDATE USER BY ID
//   updateUserByID: function (id, body) {
//     return new Promise((resolve, reject) => {
//       User.findByIdAndUpdate({ _id: id }, body, { new: true })
//         .then((updatedUser) => resolve(updatedUser))
//         .catch((error) => reject(error));
//     });
//   },// DELETE USER BY ID
//   deleteUserByID: function (id) {
//     return new Promise((resolve, reject) => {
//       User.findByIdAndRemove({ _id: id })
//         .then((deletedUser) => resolve(deletedUser))
//         .catch((error) => reject(error));
//     });
//   },
// };

//================== ASYNC AWAIT VERSION ======================

const User = require("../model/User");
// HASHED PASSWORD REQUIRE IN 
const bcrypt = require("bcryptjs");

// ASYNC USES FUNCTIONS -> EXPORTS AT BOTTOM 
async function getAllUsers() { // ASYNC KEYWORD
  try { //
    let foundAllUsers = await User.find({});
    return foundAllUsers;
  } catch (error) {
    return error;
  }
}
async function createUser(body) {
  try {
    let createdSalt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(body.password, createdSalt);
    let savedUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      password: hashedPassword,
      email: body.email,
      username: body.username,
    });
    return await savedUser.save();
  } catch (error) {
    return error;
  }
}
async function updateUserByID(id, body) {
  try {
    let updatedUser = await User.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    return error;
  }
}
async function updateUserByID(id, body) {
  try {
    let updatedUser = await User.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    return updatedUser;
  } catch (e) {
    return error;
  }
}

async function deleteUserByID(id) {
  try {
    let deletedUser = await User.findByIdAndDelete({ _id: id });
    return deletedUser;
  } catch (e) {
    return e;
  }
}
// INSTEAD OF WRAPPING -> EXPORTED HERE 
module.exports = {
  getAllUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
};
