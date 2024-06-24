const users = require('../db/database.js')
const db = require('../database/models')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

index = users.usuarios
const userController = {
    login: function (req, res) {
        res.render('login', {
            errors: {},
            oldData: {},
            title: 'MotorMarket'
        })
    },
    detail: function (req, res) {
        const id = req.params.id
        for (let i = 0; i < products.length; i++) {
            if (Number(id) === Number(usuarios[i].id)) {
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
    register: function (req, res) {
        
        res.render('register', {
            errors: {},
            oldData: {},
            title: 'Motor Market'
        })
    },
    profileEdit: function (req, res) {
        res.render('profile-edit', {
            title: 'Motor Market'
        })
    },
    registerStore: function (req, res) {
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
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
    loginStore: function (req, res) {
        const validationErrors = validationResult(req);
        if (!validationErrors.isEmpty()) {
            return res.render("login", {
                errors: validationErrors.mapped(),
                oldData: req.body
            })
        }
        db.Usuario.findOne({
            where: [{ email: req.body.email }]
        })
            .then(function (user) {
                req.session.user = user;
                if (req.body.rememberme != undefined) {
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100 })
                }
                return res.redirect('/');
            })
            .catch(function (e) {
                console.log(e)
            })
    },
    logOut: function (req, res) {
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
    },
    profileStore: function (req, res) {
        const userId = req.params.id;
        db.Usuario.findByPk(userId, {
            include: [
                { association: 'products' },
                { association: 'comentarios' }
            ]
        })
            .then(function (usuario) {
                res.render('profile', { usuario: usuario, products: usuario.products })
            })
            .catch(function (e) {
                console.log(e)
            })
    },
    profileEdit: function (req, res) {
        const usuarioId = req.params.id;
        if (req.session.user.id.toString() !== usuarioId) {
            return res.status(403).send('Acceso no autorizado');
        }
        
        db.Usuario.findByPk(usuarioId)
            .then(function (usuario) {
                if (!usuario) {
                    return res.status(404).send('Usuario no encontrado');
                }
                res.render('profile-edit', { usuario, errors: req.session.errors });
            })
            .catch(function (e) {
                console.log(e);
                res.status(500).send('Error al cargar el perfil');
            });
    },

    updateProfile: function (req, res) {
        const usuarioId = req.params.id;
        const validationErrors = validationResult(req);
        
    console.log('req.session.user.id:', req.session.user.id);
    console.log('usuarioId:', usuarioId);

        if (req.session.user.id.toString() !== usuarioId) {
            return res.status(403).send('Acceso no autorizado');
        }
        

        const usuario = {
            email: req.body.email,
            usuario: req.body.usuario,
            fecha: req.body.fecha,
            dni: req.body.dni,
            foto: req.body.foto
        };

        if (req.body.password && req.body.password.length > 0) {
            usuario.password = bcrypt.hashSync(req.body.password, 10);
        }

        if (req.body.dni && req.body.dni.trim() !== '') {
            usuario.dni = req.body.dni;
        } else {
            usuario.dni = null;
        }

        if (!validationErrors.isEmpty()) {
            return res.render("profile-edit", {
               errors: validationErrors.mapped(),
                oldData: req.body,
                usuario: usuario
            });
        }
        db.Usuario.update(usuario, {
            where: { id: usuarioId }
        })
            .then(() => {
                res.redirect(`/users/profile/${usuarioId}`);
            })
            .catch((err) => {
                console.error('Error al guardar el usuario', err);
                res.status(500).send('Error al guardar el usuario');
            });
    }
}
module.exports = userController