const prods = require('../db/database.js')
const db = require('../database/models')
indProd = prods.productos
const productsController = {
    detail: function (req, res) {
        let id = req.params.id;
        console.log(`Buscando producto con id: ${id}`);

        db.Product.findByPk(id, {
            include: [
                { association: 'usuarios' },
                {
                    association: 'comentarios',
                    include: { association: 'usuarios' }
                }
            ]
        })
        .then((producto) => {
            if (!producto) {
                console.log(`Producto con id ${id} no encontrado`);
                return res.status(404).send('Producto no encontrado');
            }

            console.log('Producto encontrado:', producto.toJSON());
            let lista_comentarios = producto.comentarios.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            res.render('product', { producto, lista_comentarios });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error Interno del Servidor');
        });
    },
    
    prodAdd: function (req, res) {
        res.render('product-add', {
            title: 'Motor Market'
        })
    }
    }
    
module.exports = productsController