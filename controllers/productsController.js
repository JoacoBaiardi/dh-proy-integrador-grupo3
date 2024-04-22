const prods = require('../db/database.js')
indProd = prods.productos
const productsController = {
    detail: function (req,res) {
        res.render(`product`,{
            title: "Motor Market",
            id:req.params.id
                })
            },
    
    prodAdd: function (req, res) {
        res.render('product-add', {
            title: 'Motor Market'
        })
    }
    }
    
module.exports = productsController