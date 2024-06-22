var express = require('express');
var router = express.Router();
var mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/', mainController.main);
router.get('/search-results', mainController.busqueda)

module.exports = router;
