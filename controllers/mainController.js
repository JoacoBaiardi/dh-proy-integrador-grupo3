const db = require('../database/models');
const { Op } = db.Sequelize;

const mainController = {
    main: function (req, res) {
        db.Product.findAll({
            order: [['created_at', 'DESC']],
            limit: 4,
            include: [
                { model: db.Comment, as: 'comentarios' }
            ]
        })
            .then(products => {
                res.render('index', { title: 'Motor Market', products });
            })
            .catch(error => {
                console.log(error);
                res.send('Error interno');
            });
    },

    busqueda: function (req, res) {
        const search = req.query.search;
        const filtro_busqueda = {
            include: [
                { model: db.Comment, as: 'comentarios' }
            ],
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
                console.log(error);
                res.send('Error interno');
            });
    }
};

module.exports = mainController;
