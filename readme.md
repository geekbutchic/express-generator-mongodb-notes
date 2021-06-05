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
