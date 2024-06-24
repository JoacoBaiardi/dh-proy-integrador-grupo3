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
                const user = req.session.user || null;
                res.render('product', { producto, lista_comentarios, user });
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
    editProd: function (req, res) {
        const productId = req.params.id;
        db.Product.findByPk(productId)
            .then(product => {
                if (!product) {
                    return res.status(404).send('Producto no encontrado')
                }
                if (product.usuario_id !== req.session.user.id) {
                    return res.status(403).send('No tienes permiso para editar este producto');
                }
                res.render('editProduct', { product });
            })
            .catch(error => {
                console.error('Error al obtener el producto:', error);
                res.status(500).send('Error interno del servidor');
            });
    },
    subProd: function (req, res) {
        const productId = req.params.id;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render('editProduct', { errors: errors.array(), product: req.body });
        }
        db.Product.findByPk(productId)
            .then(product => {
                if (!product) {
                    return res.status(404).send('Producto no encontrado');
                }
                if (product.usuario_id !== req.session.user.id) {
                    return res.status(403).send('No tienes permiso para editar este producto');
                }

                product.update({
                    foto: req.body.foto,
                    producto: req.body.producto,
                    descripcion: req.body.descripcion,
                    updated_at: new Date()
                })
                    .then(() => {
                        res.redirect(`/products/detail/${productId}`);
                    })
                    .catch(error => {
                        console.error('Error al actualizar el producto:', error);
                        res.status(500).send('Error interno del servidor');
                    });
            })
            .catch(error => {
                console.error('Error al obtener el producto:', error);
                res.status(500).send('Error interno del servidor');
            });
    },
    addComment: function (req, res) {
        const userId = req.session.user.id;
        const productId = req.params.id;
        const texto = req.body.texto.trim();
        const user = req.session.user
        if (!texto) {
            return res.status(400).send("El texto del comentario no puede estar vacío.");
        }
        const newComment = {
            texto: texto,
            usuario_id: userId,
            producto_id: productId
        };
        db.Comment.create(newComment)
            .then(function (newComment) {
                return res.redirect(`/products/detail/${productId}`);
            })
            .catch(function (e) {
                console.log("Error al guardar", e);
                return res.status(500).send("Error al guardar el comentario.");
            });
    },
    deleteProd: function (req, res) {
        const productId = req.params.id;

        db.Product.findByPk(productId)
            .then(product => {
                if (!product) {
                    return res.status(404).send('Producto no encontrado');
                }
                if (product.usuario_id !== req.session.user.id) {
                    return res.status(403).send('No tienes permiso para eliminar este producto');
                }
                db.Comment.destroy({
                    where: { producto_id: productId }
                })
                .then(() => {
                    db.Product.destroy({
                        where: { id: productId }
                    })
                    .then(() => {
                        res.redirect('/');
                    })
                    .catch(error => {
                        console.error('Error al eliminar el producto:', error);
                        res.status(500).send('Error interno del servidor');
                    });
                })
                .catch(error => {
                    console.error('Error al eliminar los comentarios:', error);
                    res.status(500).send('Error interno del servidor');
                });
            })
            .catch(error => {
                console.error('Error al obtener el producto:', error);
                res.status(500).send('Error interno del servidor');
            });
    }
}


module.exports = productsController