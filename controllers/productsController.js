const prods = require('../db/database.js')
const db = require('../database/models')
indProd = prods.productos
const { validationResult } = require('express-validator')

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
        if (req.session.user == undefined) {
            return res.redirect('/users/login');
        } else {
            return res.render('product-add');
        }
    },
    saveProd: function (req, res) {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.render("product-add", {
                errors: validationErrors.mapped(),
                oldData: req.body
            });
        }
        console.log('Datos del producto:', req.body);
        let data = req.body;
        let product = {
            foto: data.foto,
            producto: data.producto,
            descripcion: data.descripcion,
            usuario_id: req.session.user.id
        }
        db.Product.create(product)
            .then((productCreado) => {
                console.log('Producto creado:', productCreado);
                return res.redirect('/');
            })
            .catch(error => {
                console.log(error);
                return res.render('product-add', { dbError: 'Error al guardar el producto', oldData: req.body });
            });
    },
}

module.exports = productsController