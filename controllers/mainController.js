const main = require('../db/database.js')
const mainController = {
    main: function (req,res) {
        res.render('index', {
            title: 'MotorMarket'})
    },
busqueda: function (req, res) {
    res.render('search-results', {
        title: 'MotorMarket'
    })
}

}

module.exports = mainController