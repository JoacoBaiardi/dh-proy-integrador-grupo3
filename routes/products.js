var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET users listing. */

router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.prodAdd)


module.exports = router;