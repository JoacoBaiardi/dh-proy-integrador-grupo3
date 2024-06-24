var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')
var addValidator = require('../middlewares/productAddValidator')

/* GET users listing. */

router.get('/detail/:id', productsController.detail);
router.get('/add', productsController.prodAdd)
router.post("/productAdd", addValidator, productsController.saveProd)
router.get('/edit/:id', addValidator, productsController.editProd)
router.post('/edit/:id', addValidator, productsController.subProd)
router.post('/comments/:id', productsController.addComment)
router.post('/delete/:id', productsController.deleteProd)
module.exports = router;