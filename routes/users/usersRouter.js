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
    // console.log("err:", err);
    // console.log("payload: ", payload);
    if (err) { // IF ERR TRUE GIVE STATUS 500 MESSAGE
      res.status(500).json({ message: "ERROR", error: err });
    } else { // IF NOT SEND PAYLOAD
      res.json({ message: "SUCCESS", data: payload });
    }
  });
});

router.post("/create-user", function (req, res) {
  // CREATE-USER METHOD 
  userController.createUser(req.body, function (err, payload) {
    // REQ.BODY COMES FROM POSTMAN
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});


// LOCALHOST:3000/USERS
module.exports = router;
