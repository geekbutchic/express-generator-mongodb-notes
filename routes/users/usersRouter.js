// const express = require("express");
// const router = express.Router();

// //BRING IN THE USER CONTROLLER
// const userController = require("./controller/userController");
// //console.log(userController);

// /* GET USERS LISTING */
// router.get("/", function (req, res, next) {
//   res.json({
//     test: true,
//   });
// });

// router.get("/get-all-users", function (req, res) {
//   userController.getAllUsers(function (err, payload) { //CALLBACK
//     // console.log("err:", err);
//     // console.log("payload: ", payload);
//     if (err) { // IF ERR TRUE GIVE STATUS 500 MESSAGE
//       res.status(500).json({ message: "ERROR", error: err });
//     } else { // IF NOT SEND PAYLOAD
//       res.json({ message: "SUCCESS", data: payload });
//     }
//   });//CALLBACK
// });

// router.post("/create-user", function (req, res) {
//   // CREATE-USER METHOD 
//   userController.createUser(req.body, function (err, payload) {
//     // REQ.BODY COMES FROM POSTMAN
//     if (err) {
//       res.status(500).json({ message: "Error", error: err });
//     } else {
//       res.json({ message: "success", data: payload });
//     }
//   });
// });

// router.put("/update-user-by-id/:id", function (req, res) {
//   userController.updateUserByID(
//     req.params.id,
//     req.body,
//     function (err, updatedPayload) {
//       if (err) {
//         res.status(500).json({ message: "Error", error: err });
//       } else {
//         res.json({ message: "success", data: updatedPayload });
//       }
//     }
//   );
// });

// router.delete("/delete-user-by-id/:id", function (req, res) {
//   userController.deleteUserByID(req.params.id, function (err, deletedPayload) {
//     console.log(req)
//     if (err) {
//       res.status(500).json({ message: "Error", error: err });
//     } else {
//       res.json({ message: "success", data: deletedPayload });
//     }
//   });
// });

// // LOCALHOST:3000/USERS
// module.exports = router;

// ====================== PROMISE VERSION ============================

// const express = require("express");
// const router = express.Router();

// // BRING IN THE USER CONTROLLER
// const { getAllUsers, createUser, updateUserByID, deleteUserByID } = require("./controller/userController");


// // GET USERS LISTING
// router.get("/", function (req, res, next) {
//   res.json({
//     test: true,
//   });
// });

// // PROMISE GET ALL USERS PROMISE VERSION
// router.get("/get-all-users", function (req, res) {
//   getAllUsers()
//     .then((payload) => {
//       res.json({ message: "SUCCESS", data: payload });
//     })
//     .catch((error) => {
//       res.status(500).json({ message: "error", error });
//     });
// });

// // CREATE USER PROMISE VERSION
// router.post("/create-user", function (req, res) {
//   createUser(req.body)
//     .then((payload) => {
//       res.json({ message: "SUCCESS", data: payload });
//     })
//     .catch((error) => {
//       res.status(500).json({ message: "error", error });
//     });
// });

// // UPDATE USER BY ID
// router.put("/update-user-by-id/:id", function (req, res) {
//   updateUserByID(req.params.id, req.body)
//     .then((updatedUser) => res.json({ message: "SUCCESS", updatedUser }))
//     .catch((error) =>
//       res.status(500).json({ message: "error", error: error.message })
//     );
// });

// router.delete("/delete-user-by-id/:id", function (req, res) {
//   deleteUserByID(req.params.id)
//     .then((deletedUser) => res.json({ message: "SUCCESS", deletedUser }))
//     .catch((error) =>
//       res.status(500).json({ message: "error", error: error.message })
//     );
// });

// module.exports = router;





// ====================== ASYNC AWAIT FUNCTION ============================

const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  updateUserByID,
  deleteUserByID,
} = require("./controller/userController");

router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});

// 
router.get("/get-all-users", async function (req, res) {
  try {
    let foundAllUsers = await getAllUsers();
    res.json({ message: "success", foundAllUsers });
  } catch (error) {
    res.json({ message: "failure", error: error.message });
  }
});

router.post("/create-user", async function (req, res) {
  try {
    let createdUser = await createUser(req.body);
    res.json({ message: "success", createdUser });
  } catch (error) {
    res.json({ message: "failure", error: error.message });
  }
});

router.put("/update-user-by-id/:id", async function (req, res) {
  try {
    let updatedUser = await updateUserByID(req.params.id, req.body);
    res.json({ message: "success", updatedUser });
  } catch (e) {
    res.json({ message: "failure", error: error.message });
  }
});

router.delete("/delete-user-by-id/:id", async function (req, res) {
  try {
    let deletedUser = await deleteUserByID(req.params.id);
    res.json({ message: "success", deletedUser });
  } catch (e) {
    res.json({ message: "failure", error: e.message });
  }
});


module.exports = router;