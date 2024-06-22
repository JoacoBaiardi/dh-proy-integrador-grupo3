const users = require('../db/database.js')
const db = require('../database/models')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

index = users.usuarios
const userController = {
login: function (req,res) {
    res.render('login', {
        errors: {},
        oldData: {},
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
      .catch(function (err) {
        console.log("Error al guardar el usuario", err);
    });
        },
loginStore: function(req, res){
    const validationErrors = validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.render("login",{
            errors: validationErrors.mapped(),
            oldData:req.body
        })
    } 
    db.Usuario.findOne({
        where: [{email: req.body.email}]
    })
    .then( function ( user ) {
        req.session.user = user;          
        if(req.body.rememberme != undefined){
            res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
        }
        return res.redirect('/');            
    })
    .catch( function(e) {
        console.log(e)
    })
},
logOut: function(req, res){
    req.session.destroy();
    res.clearCookie('userId');
    return res.redirect('/')
},
profileStore: function(req, res){
    const userId = req.params.id;
    db.Usuario.findByPk(userId, {
        include: [
            { association: 'products'}
        ]
    })
    .catch(function(e){
        console.log(e)
    })
} 
}
module.exports = userController