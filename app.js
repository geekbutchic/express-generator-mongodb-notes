const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users/usersRouter');

const app = express();

// VIEW ENGINE SETUP
// DELETED VIEW ENGINE

app.use(logger('dev'));
app.use(express.json());
// ACCEPT IN FORM DATA
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// DELETED - STATIC FILE

app.use('/', indexRouter);
app.use('/users', usersRouter);

// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function(req, res, next) {
  next(createError(404));
});

// ERROR HANDLER
app.use(function(err, req, res, next) {
  // SET LOCALS, ONLY PROVIDING ERROR IN DEVELOPMENT
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // RENDER THE ERROR PAGE
  res.status(err.status || 500);
  res.json({ message: "error", error: err });
});

module.exports = app;
