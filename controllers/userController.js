const users = require('../db/database.js')
const db = require('../database/models')
const { validationResult } = require('express-validator')

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
        errors:{},
        oldData:{},
        title: 'Motor Market'
    })
},
profileEdit: function(req, res){
    res.render('profile-edit', {
        title:'Motor Market'
    })
},
registerStore: function(req, res){
    let errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).render('register', { errors: errors.mapped(), oldData: req.body });
    }
    let data = req.body;
    console.log(data)
    let usuario = {
        email: data.email,
        usuario: data.usuario,
        password: data.password,
        fecha: data.fecha,
        dni: data.dni,
        foto: data.foto
    };
    db.Usuario.create(usuario)
      .then(() => {
        return res.redirect('/users/login');
      })
        } 
    }

module.exports = userController