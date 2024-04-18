var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/login', userController.login);
router.get('/profile', userController.profile)
module.exports = router;
