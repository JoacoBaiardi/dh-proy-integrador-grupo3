var express = require('express');
var router = express.Router();
var maincontroller = require('../controllers/firstController')

/* GET home page. */
router.get('/', maincontroller.main);

module.exports = router;
