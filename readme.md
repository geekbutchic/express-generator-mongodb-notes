# `SETTING UP EXPRESS`

### `TERMINAL/PAGE SETUP`

`STEP 1.` 

* IN TERMINAL ADD -->
* `express (project name) --view=ejs`

```javascript
//Example
express express-generator-demo --view=ejs
```
`STEP 2.` 
* `npm i`

`STEP 3.`
* IN TERMINAL RUN `nodemon`

`STEP 4.`
* CHECK IF PORT IS CONNECTED TYPE 
```JAVASCRIPT
// localhost:3000
```

`STEP 5.` 
* DELETE `VIEWS FOLDER` FOLLOWED BY EJS LINES
* DELETE `PUBLIC FOLDER`.
```JAVASCRIPT
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//================================================//
app.use(express.static(path.join(__dirname, 'public')));
```
`STEP 6.`
* NOW UNINSTALL EJS WITH TERMINAL COMMAND
```javascript
// npm uninstall ejs
```
`STEP 7.`
* UPDATE `INDEX.JS FILE`
```JAVASCRIPT
router.get('/', function(req, res, next) {
  res.json({ index: "INDEX PATH" });
});
```
END OF SKELETON - DUPLICATED FOR FUTURE USE

================= `INSTALL MONGOOSE` ===================

`MONGODB IS A DATABASE` 

`MONGOOSE IS A DRIVER FOR MONGODB IN NODE`

`STEP 1.` 
* INSTALL MONGOOSE IN TERMINAL ENTER
```JAVASCRIPT
// npm i mongoose
```
`STEP 2.`
* ADD CALLBACK FUNCTION FOR PORT 
* THIS WILL ADD THE SERVER SCRIPT ON TERMINAL
```JAVASCRIPT
server.listen(port, function () {
  console.log("SERVER IS LIVE ON PORT: " + port);
});
```

`STEP 3.` 
* UPDATE ERROR MESSAGE ON APP.JS
```JAVASCRIPT
app.use(function(err, req, res, next) {
  // SET LOCALS, ONLY PROVIDING ERROR IN DEVELOPMENT
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // RENDER THE ERROR PAGE
  res.status(err.status || 500);
  res.json({ message: "error", error: err });
});
```
====================== MVC ===========================
## FOLDER SETUP

`STEP 1.` CREATE `USERS` FOLDER.

`STEP 2.` DRAG `USER.JS` FILE INTO USERS FOLDER.

`STEP 3.` RENAME USER.JS TO `usersRouter.js`

`STEP 4.` MAKE SURE THE PATH IS UPDATED IN `APP.JS`
```JAVASCRIPT
const usersRouter = require('./routes/users/usersRouter');
```
`STEP 5.` CREATE TWO FOLDERS IN THE `USERS FOLDER`.

* MODEL FOLDER 
* CONTROLLER FOLDER

`MODEL AND CONTROLLER FOLDERS WILL HAVE THEIR OWN ICON. THEY ARE PART OF MVC.`

`STEP 6.` CREATE A FILE IN `MODEL FOLDER` CALLED `User.js`.  YES THE FIRST LETTER MUST BE CAPITALIZED.

`STEP 7.` IN THE `CONTROLLER FOLDER` CREATE A FILE CALLED `userController.js`

`STEP 8.` IN `USER.JS FILE` ADD USER SCHEMA AKA - COOKIE CUTTER FOR CREATING A NEW USER.

```JAVASCRIPT
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});

module.exports = mongoose.model("user", userSchema);
```

`STEP 9.` CREATE FULL SCHEMA FOR NEW USER IN `USER.JS FILE`.

```JAVASCRIPT
// MODEL
const mongoose = require("mongoose");
// NEW KEYWORD => CREATES A NEW OBJECT
// OF MONGODB TYPE {}
const userSchema = new mongoose.Schema({
  firstName: { // CAMEL CASE 
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String, // CASE SENSITIVE 
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
//  MODEL WILL BE CALLED "USER" AND USE THIS SCHEMA
```

`STEP 10.` DELETE PATH
```JAVASCRIPT
const path = require('path');
```

`STEP 11.` ADD MONGOOSE THE DRIVER FOR MONGODB
* ADD PATH
```JAVASCRIPT
const mongoose = require("mongoose");
```
* ADD MONGOOSE DATABASE CODE IN `APP.JS`

```JAVASCRIPT
mongoose
  .connect("mongodb://localhost:27017/express-generator-mongodb-notes", {
    useNewUrlParser: true, // REMOVES ERRORS MESSAGES
    useUnifiedTopology: true, // REMOVES ERROR MESSAGES
  })
  .then(() => { //.THEN IS A PROMISE
    // PROMISES
    console.log(`MONGODB CONNECTED`);
  })
  .catch(function (e) { // ANY ERROR GOES TO CATCH BLOCK
    console.log(e);
  });
```
=================== PART 2 OF MONGODB ==================
### LESSON INDEX
* CALLBACK FUNCTIONS 
* REQUIRE IN USER SCHEMA
* GET ALL USERS FUNCTION
* CREATE USER FUNCTION

```JAVASCRIPT
const User = require("../model/User");
//USER IS COMING FROM MONGODB SCHEMA
```
REQUIRE IN `USER SCHEMA` FROM THE `MODEL/USER.JS FOLDER`.

CREATING A GET REQUEST WITH A CALLBACK FUNCTION.

`STEP 1.` MAKE SURE USER SCHEMA IS REQUIRED IN.

`STEP 2.` WRITE GET-ALL-USERS FUNCTION IN `userController.js`
```JAVASCRIPT
module.exports = {
  getAllUsers: function (callback) {
    // USER.FIND({}) IS A MONGOOSE FUNCTION TO QUERY THE DATABASE
    // 2 PARAMS => ERROR FIRST 
    // PAYLOAD 2ND -> USER DATA
    User.find({}, function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
};
```
`STEP 3.` REQUIRE IN `USER-CONTROLLER` INTO `ROUTER-CONTROLLER`
```JAVASCRIPT
const userController = require("./controller/userController");
//LOCATED BELOW ROUTER()
```

```JAVASCRIPT
// GOOD WAY TO TEST IF userRouter.js IS FUNCTIONING 
// SHOULD RETURN "test": true
router.get("/", function (req, res, next) {
  res.json({
    test: true,
  });
});
```
`STEP 4` CREATE A CALLBACK FUNCTION IN USERS-ROUTER
```JAVASCRIPT
router.get("/get-all-users", function (req, res) {
  userController.getAllUsers(function (err, payload) {
    //ERR ALWAYS COMES FIRST
    if (err) {
      res.status(500).json({ message: "ERROR", error: err });
    } else {
      res.json({ message: "SUCCESS", data: payload });
    }
  });
});
// PREFIXED USERS ROUTER IN APP.JS /USERS
```
DATA FLOW => 
* GET REQUEST LOCATED IN `userController.js`
* USER SCHEMA IS LOCATED IN `User.js`
* REQUIRE IN `userController.js` INTO `usersRouter.js`

`STEP 5`
TEST IN POSTMAN SHOULD SEE 
```javascript
{
    "message": "SUCCESS",
    "data": []
}
//localhost:3000/users/get-all-users
```
IT WILL LOOK LIKE THIS UNTIL WE CREATE A USER

TO NOTE: WHEN YOU CONSOLE.LOG `userController.js` IT IS EXPORTING AN `OBJECT`.

### `L - EXPRESS CONTINUED CRUD, MONGODB, ROBOT3`
* TO NOTE: VIDEO EXPLANATION AT `MINUTE 45`
* MORNING RECORDING
```JAVASCRIPT
SERVER IS LIVE ON PORT: 3000
MONGODB CONNECTED
err: true // ERR SET TO TRUE
payload:  null
GET /users/get-all-users 500 59.952 ms - 32
[nodemon] restarting due to changes...
[nodemon] starting `node ./bin/www`
SERVER IS LIVE ON PORT: 3000
MONGODB CONNECTED
err: null // ERR IS NULL 
payload:  []
GET /users/get-all-users 200 17.925 ms - 31
```
==================== CREATE USER WITH CALLBACKS ================
FUNCTION FOR `userController.js`
```JAVASCRIPT
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
```
FUNCTION FOR `userRouter.js`
```JAVASCRIPT
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
```
POST REQUEST IN POSTMAN
```JAVASCRIPT
{
    "fistName": "Sonny",
    "lastName": "Valenz",
    "email": "sonnyleevalenz@gmail.com",
    "password": "Raven736599",
    "username": "vsonnylee"
}
// POST => BODY => RAW => JSON
{
    "message": "success",
    "data": {
        "_id": "60bbfb05fc12a91943bb6e3b",
        "lastName": "Valenz",
        "password": "Raven736599",
        "email": "sonnyleevalenz@gmail.com",
        "username": "vsonnylee",
        "__v": 0
    }
}
// USER CREATED
// localhost:3000/users/create-user
```
WE SHOULD ALL CHECK IN ROBOT3 
* CLICK FILE NAME
* CLICK COLLECTIONS
* DOUBLE CLICK USERS 
* USER CREATED SHOULD APPEAR

```JAVASCRIPT
// CONSOLE.LOG(BODY) 
{
  fistName: 'Sonny',
  lastName: 'Valenz',
  email: 'sonnyleevalenz@gmail.com',
  password: 'Raven736599',
  username: 'vsonnylee'
}
// SAVED USER IS ASSIGNED A UNIQUE ID 
// CONSOLE.LOG(SAVEDUSER)
{
  _id: 60bc028b32c9061c35db036e,
  lastName: 'Valenz',
  password: 'Raven736599',
  email: 'sonnyleevalenz@gmail.com',
  username: 'vsonnylee'
}
```
============= CONTINUED CALLBACK WITH MORE REQUESTS ==============

NEXT LESSON INDEX
* MVC - `MODEL/DATABASE SCHEMA` || `VIEW/REACT` || `CONTROLLER/HANDLES LOGIC`
* CALLBACK FUNCTION UPDATE-USER-BY-ID
* CALLBACK FUNCTION DELETE-USER-BY-ID
* UNDERSTAND HOW THE DATA FLOWS 
* `MODEL` => `CONTROLLER` => `USERS-ROUTER`

UPDATE USER BY ID CALLBACK FUNCTION
```JAVASCRIPT
// USER-CONTROLLER FILE
  updateUserByID: function (id, body, callback) {
    User.findByIdAndUpdate(
      { _id: id }, // MONGODB SPECIFIC {_id: id}
      body, // FROM POSTMAN
      { new: true }, // NEEDED OR ELSE GIVES BACK OBJECT BEFORE UPDATE!
      function (err, updatedPayload) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, updatedPayload);
        }
      }
    );
  },
```
FUNCTION IN USER-ROUTER
```JAVASCRIPT
router.put("/update-user-by-id/:id", function (req, res) {
  userController.updateUserByID(
    req.params.id, // WHATS NEEDED IN REQUEST 
    req.body, // POSTMAN BODY 
    function (err, updatedPayload) {
      if (err) {
        res.status(500).json({ message: "Error", error: err });
      } else {
        res.json({ message: "success", data: updatedPayload });
      }
    }
  );
});
```
FINAL RESULT IN POSTMAN - UPDATED USER
```JAVASCRIPT
// POST REQUEST
//localhost:3000/users/update-user-by-id/60bc028b32c9061c35db036e
{
    "email": "vsonnylee@gmail.com"
}
// UPDATING USERS EMAIL 
{
    "message": "success",
    "data": {
        "_id": "60bc028b32c9061c35db036e",
        "lastName": "Valenz",
        "password": "Raven736599",
        "email": "vsonnylee@gmail.com",
        "username": "vsonnylee",
        "__v": 0
    }
}
// PREVIOUSLY IT WAS sonnyleevalenz@gmail.com
```
CALLBACK FUNCTION DELETE-USER-BY-ID
```JAVASCRIPT
// USER-CONTROLLER 
  deleteUserByID: function (id, callback) {
    User.findByIdAndRemove({ _id: id }, function (err, deletedPayload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, deletedPayload);
      }
    });
  },
```
USER-ROUTER FUNCTION
```JAVASCRIPT
// USER-ROUTER
router.delete("/delete-user-by-id/:id", function (req, res) {
  userController.deleteUserByID(req.params.id, function (err, deletedPayload) {
    console.log(req)
    if (err) { // NULL = NOT THERE RUN LINE DELETE-PAY-LOAD
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: deletedPayload });
    }
  });
});
```
POSTMAN => FINAL RESULT
```JAVASCRIPT
//localhost:3000/users/delete-user-by-id/60bc028b32c9061c35db036e

{
    "message": "success",
    "data": {
        "_id": "60bc028b32c9061c35db036e",
        "lastName": "Valenz",
        "password": "Raven736599",
        "email": "vsonnylee@gmail.com",
        "username": "vsonnylee",
        "__v": 0
    }
}
```
GET REQUEST AND ROBOT3 SHOULD SHOW ERASED USER
```JAVASCRIPT
// GET REQUEST AFTER DELETING USER
{
    "message": "SUCCESS",
    "data": []
}
```
=================== PROMISE VERSION =========================

VIDEO: L- Express CRUD, Promise, Bcryptjs
* LOGIC IS HAPPENING IN THE CONTROLLER.
* ROUTES = `GET, POST, DELETE, UPDATE`
* CRUD - `CREATE, RETRIEVE, UPDATE, DELETE`
* `POST = CREATE` * `GET = RETRIEVE` * `PUT = UPDATE` * `DELETE = DELETE`
* `bcryptjs`
* PROMISE `GETALLUSERS, CREATEUSER, UPDATEUSERBYID, DELETEUSERBYID`

START WITH REQUIRING IN `bcryptjs` IN TERMINAL ADD `npm i bcryptjs`
* NEXT REQUIRE IN `bcryptjs` LOCATED ON TOP OF PAGE 
```JAVASCRIPT
const bcrypt = require("bcryptjs");
```
BEFORE MOVING INTO PROMISES THE LAST FUNCTION WILL EXPLAIN CALLBACK HELL AND REQUIRE IN BCRYPTJS.
```JAVASCRIPT
  createUser: function (body, callback) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        callback(err, null);
      } else {
        bcrypt.hash(body.password, salt, function (err, hash) {
          if (err) {
            callback(err, null);
          } else {
            let savedUser = new User({
              firstName: body.firstName,
              lastName: body.lastName,
              password: hash,
              email: body.email,
              username: body.username,
            });
            // SAVE FUNCTION 
            savedUser.save(function (err, payload) {
              if (err) {
                callback(err, null);
              } else {
                callback(null, payload);
              }
            });
          }
        });
      }
    });
  },
```
### GET ALL USER WITH PROMISE FUNCTION
```JAVASCRIPT
  getAllUsers: function () {
    return new Promise((resolve, reject) => {
      User.find({}) // SUCCESS FINDING USER 
        .then((payload) => { // CALLBACK REPLACED BY RESOLVE
          resolve(payload); // PASS IN PAYLOAD : USER DATA
        })
        .catch((error) => {
          reject(error);
        });
    });
  }, 
// USER-CONTROLLER
```
USER-ROUTER 
```JAVASCRIPT
// SUCCESS COMES BEFORE ERROR IN PROMISES 
router.get("/get-all-users", function (req, res) {
  getAllUsers() // CALL FUNCTION 
    .then((payload) => { // RESOLVE => PAYLOAD
      res.json({ message: "success", data: payload });
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});
// USER-ROUTER VERSION
```
MAKE SURE TO REQUIRE IN `DESTRUCTED VERSION ON TOP OF PAGE`

```JAVASCRIPT
const { getAllUsers } = require("./controller/userController")
```
SHOULD RETURN SUCCESS IN POSTMAN

```JAVASCRIPT
{
    "message": "success",
    "data": []
}
```
THE SKELETON OF A PROMISER FUNCTION
```JAVASCRIPT
nameOfFunction: function () {
  return new Promise ((resolve, reject) => {

  })
}
```
### CREATE USER WITH A PROMISE FUNCTION
```JAVASCRIPT
  createUser: function (body) {
    // WRAPPING PROMISE FOR ENTIRE FUNCTION
    return new Promise((resolve, reject) => {
      //ASYNCHRONOUS
      bcrypt // REQUIRE IN SALT
        .genSalt(10) // RETURN SALT = METHOD
        .then((salt) => {
          // NO LONGER NEED TO USE CALLBACK
          return bcrypt.hash(body.password, salt); //RETURNS HASHED PASSWORD
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
        .then((savedUser) => { // SENT TO ROUTER/PAYLOAD MESSAGE
          resolve(savedUser);
        })
        .catch((error) => { // IF ERR SENT TO ROUTER/ERR MESSAGE
          reject(error);
        });
    });
  },
```
CREATE USER ROUTER-CONTROLLER FUNCTION
```JAVASCRIPT
// UPDATE REQUIRE IN =>
const { getAllUsers, createUser } = require("./controller/userController");

router.post("/create-user", function (req, res) {
  createUser(req.body)
    .then((payload) => {
      res.json({ message: "SUCCESS", data: payload });
    })
    .catch((error) => {
      res.status(500).json({ message: "error", error });
    });
});
```
POSTMAN WITH NEW CREATED USER 
```JAVASCRIPT
//localhost:3000/users/create-user
// POST => BODY => RAW => JSON
{
    "firstName": "Sonny",
    "lastName": "Valenzuela",
    "password": "Raven736599",
    "email": "sonnyleevalenz@icloud.com",
    "username": "vsonnylee"
}
// CREATED USER ==========================
{
    "message": "SUCCESS",
    "data": {
        "_id": "60bd5348e7924b333276819b",
        "firstName": "Sonny",
        "lastName": "Valenzuela",
        "password": "$2a$10$ppEQCIZ1p7l.uAAzv4ekOuWCCSB.d1ngDElCcrWSPDnfFzSfDoziu",
        "email": "sonnyleevalenz@icloud.com",
        "username": "vsonnylee",
        "__v": 0
    }
}
// RESULT WITH HASHED PASSWORD
```
### PROMISE UPDATE-USER-BY-ID
```JAVASCRIPT
// USER-CONTROLLER
  updateUserByID: function (id, body) {
    return new Promise((resolve, reject) => {
      User.findByIdAndUpdate({ _id: id }, body, { new: true })
        .then((updatedUser) => resolve(updatedUser))
        .catch((error) => reject(error));
    });
  },
```
UPDATE-USER-BY-ID ROUTER
```JAVASCRIPT
const { getAllUsers, createUser, updateUserByID} = require("./controller/userController")

router.put("/update-user-by-id/:id", function (req, res) {
  updateUserByID(req.params.id, req.body)
    .then((updatedUser) => res.json({ message: "SUCCESS", updatedUser }))
    .catch((error) =>
      res.status(500).json({ message: "error", error: error.message })
    );
});
```
POSTMAN 
```JAVASCRIPT
//localhost:3000/users/update-user-by-id/60bd5348e7924b333276819b
{
    "firstName": "Santino" // UPDATE NAME
}
//BODY
{
    "message": "SUCCESS",
    "updatedUser": {
        "_id": "60bd5348e7924b333276819b",
        "firstName": "Santino",
        "lastName": "Valenzuela",
        "password": "$2a$10$ppEQCIZ1p7l.uAAzv4ekOuWCCSB.d1ngDElCcrWSPDnfFzSfDoziu",
        "email": "sonnyleevalenz@icloud.com",
        "username": "vsonnylee",
        "__v": 0
    }
}
// UPDATED USER => SHOULD ALSO REFLECT IN ROBOT3
```
DELETE USER BY ID PROMISE
```JAVASCRIPT
// USER-CONTROLLER
  deleteUserByID: function (id) {
    return new Promise((resolve, reject) => {
      User.findByIdAndRemove({ _id: id })
        .then((deletedUser) => resolve(deletedUser))
        .catch((error) => reject(error));
    });
  },
```
DELETE USER BY ID ROUTER
```JAVASCRIPT
//
router.delete("/delete-user-by-id/:id", function (req, res) {
  deleteUserByID(req.params.id)
    .then((deletedUser) => res.json({ message: "SUCCESS", deletedUser }))
    .catch((error) =>
      res.status(500).json({ message: "error", error: error.message })
    );
});
```
POSTMAN
```JAVASCRIPT
// DELETE 
// localhost:3000/users/delete-user-by-id/60bd5348e7924b333276819b
{
    "message": "SUCCESS",
    "deletedUser": {
        "_id": "60bd5348e7924b333276819b",
        "firstName": "Santino",
        "lastName": "Valenzuela",
        "password": "$2a$10$ppEQCIZ1p7l.uAAzv4ekOuWCCSB.d1ngDElCcrWSPDnfFzSfDoziu",
        "email": "sonnyleevalenz@icloud.com",
        "username": "vsonnylee",
        "__v": 0
    }
}
// SHOULD ALSO REFLECT IN ROBOT3
```
================== ASYNC AWAIT FUNCTIONS =======================
TO NOTE WITH ASYNC AND AWAIT
* MODULE.EXPORTS IS AT THE BOTTOM NOT WRAPPING THE FUNCTIONS
* ASYNC IS A KEY WORD
* TRY BLOCK 
* CATCH BLOCK

GET-ALL-USERS ASYNC FUNCTION
```JAVASCRIPT
// CONTROLLER
async function getAllUsers() {
  // ASYNC KEYWORD
  try { // TRY BLOCK
    // AWAIT SIMILAR TO .THEN
    let foundAllUsers = await User.find({});
    return foundAllUsers;
  } catch (error) { //CATCH BLOCK 
    return error;
  }
}
// EXPORTS BELOW 
module.exports = {
  getAllUsers,
};
```
GET-ALL-USERS ROUTER 
```JAVASCRIPT
const { getAllUsers } = require("./controller/userController");
// REQUIRE IN DYNAMICALLY SAME AS IN PROMISE

router.get("/get-all-users", async function (req, res) {
  try { // PLACED INTO INTERMEDIATE VARIABLE
    let foundAllUsers = await getAllUsers(); // CALLING FUNCTION
    res.json({ message: "success", foundAllUsers });
  } catch (error) {
    res.json({ message: "failure", error: error.message });
  }
});
```
ASYNC CREATE USER FUNCTION
```JAVASCRIPT
async function createUser(body) {
  try { // AWAIT HAS TO BE A PROMISE
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
// EXPORTS BELOW 
module.exports = {
  getAllUsers,
  createUser
};
```
ASYNC CREATE-USER
```JAVASCRIPT
router.post("/create-user", async function (req, res) {
  try {
    let createdUser = await createUser(req.body);
    res.json({ message: "SUCCESS", createdUser });
  } catch (error) {
    res.json({ message: "FAILURE", error: error.message });
  }
});
```
POSTMAN
```JAVASCRIPT
// localhost:3000/users/create-user
{
    "firstName": "Tom",
    "lastName": "Distefano",
    "password": "SecretService",
    "email": "tom.distefano@gmail.com",
    "username": "killshot"
}
// BODY OF CREATED-USER
{
    "message": "SUCCESS",
    "createdUser": {
        "_id": "60bd88fd880a0f3f4fae80fe",
        "firstName": "Tom",
        "lastName": "Distefano",
        "password": "$2a$10$AryUxyl6tkr6whADxMn7Z.U0KWW2yBXbIvXkAsEx0fMJfM66sDFcC",
        "email": "tom.distefano@gmail.com",
        "username": "killshot",
        "__v": 0
    }
}
// FINAL RESULT WITH HASHED PASSWORD
```

ASYNC UPDATE-BY-USER-ID
```javascript
async function updateUserByID(id, body) {
  try { // TRY BLOCK
    let updatedUser = await User.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    return updatedUser;
  } catch (e) { // CATCH BLOCK
    return error;
  }
}
// EXPORTS 
module.exports = {
  getAllUsers,
  createUser,
  updateUserByID,
};
```
ROUTER OF UPDATE-USER-BY-ID

```JAVASCRIPT
router.put("/update-user-by-id/:id", async function (req, res) {
  try {
    let updatedUser = await updateUserByID(req.params.id, req.body);
    res.json({ message: "SUCCESS", updatedUser });
  } catch (e) {
    res.json({ message: "FAILURE", error: error.message });
  }
});
```
POSTMAN
```JAVASCRIPT
//localhost:3000/users/update-user-by-id/60bd88fd880a0f3f4fae80fe
{
    "firstName": "Thomas" // UPDATES NAME TOM => THOMAS
}
// BODY
{
    "message": "SUCCESS",
    "updatedUser": {
        "_id": "60bd88fd880a0f3f4fae80fe",
        "firstName": "Thomas",
        "lastName": "Distefano",
        "password": "$2a$10$AryUxyl6tkr6whADxMn7Z.U0KWW2yBXbIvXkAsEx0fMJfM66sDFcC",
        "email": "tom.distefano@gmail.com",
        "username": "killshot",
        "__v": 0
    }
}
```
