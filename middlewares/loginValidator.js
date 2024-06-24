const { body } = require("express-validator");
const db = require("../database/models");
const bcryptjs = require('bcryptjs');

const loginValidation = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Usuario (email)")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function (value, { req }) {
            return db.Usuario.findOne({
                where: { email: value }
            })
                .then(function (userToLogin) {
                    if (!userToLogin) {
                        throw new Error("No existe un usuario con ese email")
                    }
                })
        }
        ),
    body("password")
        .notEmpty()
        .withMessage("Debes Introducir una contraseña")
        .custom(function (value, { req }) {
            return db.Usuario.findOne({
                where: { email: req.body.email }
            })
                .then(function (user) {
                    if (user) {
                        const password = user.password;
                        const passwordOk = bcryptjs.compareSync(value, password);
                        if (!passwordOk) {
                            throw new Error('Password incorrecto')
                        }
                    }
                })
        })

];

module.exports = loginValidation;