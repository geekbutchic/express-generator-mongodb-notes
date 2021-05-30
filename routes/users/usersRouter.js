const express = require('express');
const router = express.Router();

/* GET USERS LISTING */
router.get('/', function(req, res, next) {
  res.json({
    test:true,
  });
});

// LOCALHOST:3000/USERS
module.exports = router;
