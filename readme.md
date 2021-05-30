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

`STEP 3.` RENAME USER.JS TO `userRouter.js`

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
const mongoose = require("mongoose");

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

module.exports = mongoose.model("user", userSchema);
```
