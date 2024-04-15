var express = require('express');
var router = express.Router();
var maincontroller = require('../controllers/usersController')

/* GET home page. */
router.get('/', maincontroller.main);

module.exports = router;
