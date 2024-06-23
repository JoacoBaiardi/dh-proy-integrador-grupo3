const db = require('../database/models');
const { Op } = db.Sequelize;

const mainController = {
    main: function (req, res) {
        db.Product.findAll({
            order: [['created_at', 'DESC']], // Ordenar por fecha de creación descendente
            limit: 4 // Opcional: Limitar el número de productos a mostrar en la página principal
        })
            .then(products => {
                res.render('index', { title: 'Motor Market', products });
            })
            .catch(error => {
                console.error('Error al obtener productos:', error);
                res.status(500).send('Error interno del servidor');
            });
    },

    busqueda: function (req, res) {
        const search = req.query.search;
        const filtro_busqueda = {
            where: {
                [Op.or]: [
                    { producto: { [Op.like]: `%${search}%` } },
                    { descripcion: { [Op.like]: `%${search}%` } }
                ]
            },
            order: [
                ["created_at", "DESC"]
            ]
        };

        db.Product.findAll(filtro_busqueda)
            .then(results => {
                console.log(results)
                return res.render('search-results', { titulo: `Resultados: ${search}`, products: results });
            })
            .catch(error => {
                console.error('Error al realizar la búsqueda:', error);
                res.status(500).send('Error interno del servidor');
            });
    }
};

module.exports = mainController;
