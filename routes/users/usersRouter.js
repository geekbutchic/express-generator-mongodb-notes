const express = require("express");
const router = express.Router();

//BRING IN THE USER CONTROLLER
const userController = require("./controller/userController");
//console.log(userController);

/* GET USERS LISTING */
router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});

router.get("/get-all-users", function (req, res) {
  userController.getAllUsers(function (err, payload) {
    if (err) {
      res.status(500).json({ message: "ERROR", error: err });
    } else {
      res.json({ message: "SUCCESS", data: payload });
    }
  });
});



// LOCALHOST:3000/USERS
module.exports = router;
