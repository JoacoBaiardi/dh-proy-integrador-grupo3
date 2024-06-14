const users = require('../db/database.js')
const db = require('../database/models')
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
},
registerStore: function(req, res){
    body = req.body
    nuevoUsuario = {
        email: body.email,
        password: body.password,
        fecha: body.fecha_nacimiento,
        dni: body.nro_documento,
        foto: body.foto
    }
    db.Usuario.create(nuevoUsuario)
    return res.redirect('/users/login')
    }
}

module.exports = userController