const main = require('../db/database.js')
const mainController = {
    main: function (req,res) {
        res.render('index', {
            title: 'Luxury Cars'})
    },
busqueda: function (req, res) {
    res.render('search-results', {
        title: 'Mercado Liebre'
    })
}

}

module.exports = mainController