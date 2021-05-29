const express = require('express');
const router = express.Router();

/* GET USERS LISTING */
router.get('/', function(req, res, next) {
  res.json({
    test:true,
  });
});
// localhost:3000/users
module.exports = router;
