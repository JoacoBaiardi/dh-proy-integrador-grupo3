const main = require('../db/database.js')
const mainController = {
    main: function (req,res) {
        res.render('index', {
            title: 'Luxury Cars'})
}}

module.exports = mainController