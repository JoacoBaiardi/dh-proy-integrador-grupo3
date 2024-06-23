var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')
var addValidator = require('../middlewares/productAddValidator')

/* GET users listing. */

router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.prodAdd)
router.post ("/productAdd", addValidator, productsController.saveProd) 


module.exports = router;