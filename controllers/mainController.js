const db = require('../database/models');
const { Op } = db.Sequelize;

const mainController = {
    main: function (req, res) {
        db.Product.findAll()
            .then(productos => {
                res.render('index', { title: 'Motor Market', productos });
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
            }
        };

        db.Product.findAll(filtro_busqueda)
            .then(results => {
                return res.render('search-results', { titulo: `Resultados: ${search}`, productos: results });
            })
            .catch(error => {
                console.error('Error al realizar la búsqueda:', error);
                res.status(500).send('Error interno del servidor');
            });
    }
};

module.exports = mainController;
