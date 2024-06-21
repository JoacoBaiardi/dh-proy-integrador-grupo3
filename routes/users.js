var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var registerValidator = require("../middlewares/registerValidator")
var loginValidator = require("../middlewares/loginValidator")

/* GET users listing. */
router.get('/login', userController.login);
router.post('/login', loginValidator, userController.loginStore)
router.post('/logout', userController.logOut)
router.get('/profile', userController.profile)
router.get('/register', userController.register)
router.get('/profile-edit', userController.profileEdit)
router.post('/register', registerValidator, userController.registerStore)


module.exports = router;