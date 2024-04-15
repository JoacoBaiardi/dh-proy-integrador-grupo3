var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', controller.main);

module.exports = router;
