const products = require('../db/products.js/productos')
const productsController = {
main: function (req,res) {
    res.send('algo')
},
detail: function (req,res) {
        const id = req.params.id
        for (let i = 0; i < products.length; i++) {
            if (Number(id)===Number(products[i].id)) {
                res.send(`algo ${products[i].algo}.`)
            }
        }
        res.send('no se encontro') 
    },
}
module.exports = controller