const { body } = require("express-validator");
const db = require("../database/models"); //aca tenemos q llamar a la db posta
const bcryptjs = require('bcryptjs'); // aca no tengo ni idea de cuerno es esto

const loginValidation = [
    body("usuario")
        .notEmpty()
        .withMessage("Debes completar tu Usuario (email)")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un usuario en formato email")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email:value}
            })
            .then(function(userToLogin){
                if(!userToLogin){
                    throw new Error("No existe un usuario con ese nombre")
                }
            })
        }
    ),
    body("contraseña")
        .notEmpty()
        .withMessage("Debes Introducir una contraseña")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email:req.body.email}
            })
            .then(function(user){
                if(user){
                    const contraseña = user.contraseña;
                    const contraseñaOk= bcryptjs.compareSync(value,contraseña);
                    if(!contraseñaOk){
                        throw new Error("Contraseña incorrecta")
                    }                    
                }
            })
        })
]

module.exports = loginValidation;