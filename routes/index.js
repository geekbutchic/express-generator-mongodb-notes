const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ index: "INDEX PATH" });
});

module.exports = router;
