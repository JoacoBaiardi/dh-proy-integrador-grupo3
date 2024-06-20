const users = require('../db/database.js')
const db = require('../database/models')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

index = users.usuarios
const userController = {
login: function (req,res) {
    res.render('login', {
        errors:{},
        oldData:{},
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
        password: bcrypt.hashSync(data.password, 10),
        fecha: data.fecha,
        dni: data.dni || null,
        foto: data.foto
    };
    db.Usuario.create(usuario)
      .then(() => {
        return res.redirect('/users/login');
      })
        },
    
    loginStore: function(req, res, next) {
        let usuario = req.body.usuario;
        let password = req.body.password;

        let check = {
            where: { usuario: usuario }
        };

        db.Usuario.findOne(check)
        .then(function(result){
            if(result){
                let checkPass = bcrypt.compareSync(password, result.password);
                if(checkPass){
                    req.session.user = result.dataValues;
                    if (req.body.recordarme) {
                        res.cookie("id", result.dataValues.id, { maxAge: 1000 * 60 * 60 });
                       }
                       let id = req.session.usuario.id;
                       return res.redirect(`/users/profile/${id}`);
                } else{
                    let errors = { mensaje: "El usuario ingresado no esta registrado" };
                    return res.render('login', { errors: errors });
                }
            }
        })
    }
    }

module.exports = userController