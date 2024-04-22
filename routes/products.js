var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET users listing. */

router.get('/add', productsController.prodAdd)
router.get('/:id', productsController.detail);

module.exports = router;