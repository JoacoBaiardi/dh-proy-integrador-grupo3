const users = require('../db/database.js')
index = users.usuarios
const userController = {
login: function (req,res) {
    res.render('login', {
        title: 'MotorMarket'
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
        title: "Motor Market"
    })
},
register: function(req, res) {
    res.render('register', {
        title: 'Motor Market'
    })
},
profileEdit: function(req, res){
    res.render('profile-edit', {
        title:'Motor Market'
    })
}
}
module.exports = userController