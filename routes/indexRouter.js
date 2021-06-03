const express = require('express');
const router = express.Router();

// GET HOME PAGE
router.get('/', function(req, res, next) {
  res.json({ index: "INDEX PATH" });
});

module.exports = router;