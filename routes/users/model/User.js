// MODEL
const mongoose = require("mongoose");
// NEW KEYWORD => CREATES A NEW OBJECT
// OF MONGODB TYPE {}
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
});
// IN ROBOT3 THE NAME WILL APPEAR AS USERS
module.exports = mongoose.model("user", userSchema);
//  MODEL WILL BE CALLED "USER" AND USE THIS SCHEMA