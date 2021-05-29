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

```JAVASCRIPT
server.listen(port, function () {
  console.log("SERVER IS LIVE ON PORT: " + port);
});
```
