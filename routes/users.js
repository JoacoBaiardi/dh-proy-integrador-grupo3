var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var registerValidator = require("../middlewares/registerValidator")
var loginValidator = require("../middlewares/loginValidator")
var editValidator = require("../middlewares/editValidator")

/* GET users listing. */
router.get('/login', userController.login);
router.post('/login', loginValidator, userController.loginStore)
router.post('/logout', userController.logOut)
router.get('/profile/:id', userController.profileStore)
router.get('/register', userController.register)
router.post('/register', registerValidator, userController.registerStore)
router.get('/profile-edit/:id', userController.profileEdit);
router.post('/profile-edit/:id', editValidator, userController.updateProfile);


module.exports = router;