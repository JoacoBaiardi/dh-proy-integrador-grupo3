const users = require('../db/database.js')
const userController = {
login: function (req,res) {
    res.render('login', {
        title: 'Mercado Liebre'
    })
},
detail: function (req,res) {
        const id = req.params.id
        for (let i = 0; i < products.length; i++) {
            if (Number(id)===Number(usuarios[i].id)) {
                res.send(`algo ${usuarios[i].algo}.`)
            }
        }
        res.send('no se encontro') 
    },

profile: function (req, res) {
    res.render('profile', {
        title: "Mercado Liebre"
    })
}
}
module.exports = userController