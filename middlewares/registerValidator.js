const { body } = require("express-validator");
const db = require("../database/models");
const bcrypt = require('bcryptjs')

const registerValidation = [
    body("email")
        .notEmpty().withMessage("Ingrese un email por favor").bail()
        .isEmail().withMessage("Ingrese un email valido por favor").bail()
        .custom(function(value){
            return db.Usuario.findOne({
                where : {email : value}
            }).then(function(user){
                if(user){
                    return Promise.reject("El email ingresado ya existe")
                }
            });
        }),
    body("usuario")
        .notEmpty().withMessage("Ingrese un nombre de usuario por favor").bail(),
    body("password")
        .notEmpty().withMessage("Ingrese una contraseña por favor").bail()
        .isLength({min: 4}).withMessage("La contraseña debe tener un mínimo de 4 caracteres").bail(),
    body("fecha")
        .notEmpty()
        .withMessage("Ingrese una fecha por favor").bail(), 
    body("dni")
        .optional({ checkFalsy: true }).isNumeric().withMessage("El DNI debe ser numérico si se proporciona"),       
];

module.exports = registerValidation;