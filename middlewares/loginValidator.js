const { body } = require("express-validator");
const db = require("../database/models"); //aca tenemos q llamar a la db posta
const bcryptjs = require('bcryptjs'); 
const loginValidation = [
    body("email")
    .notEmpty()
    .withMessage("Debes completar tu Usuario (email)")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un usuario en formato email")
    .custom(async (value) => {
        const userToLogin = await db.Usuario.findOne({ where: { email: value } });
        if (!userToLogin) {
            throw new Error("No existe un usuario con ese nombre");
        }
        return true;
    }),
body("password")
    .notEmpty()
    .withMessage("Debes Introducir una contraseña")
    .custom(async (value, { req }) => {
        const user = await db.Usuario.findOne({ where: { email: req.body.email } });
        if (user) {
            const contraseña = user.password;
            const contraseñaOk = bcryptjs.compareSync(value, contraseña);
            if (!contraseñaOk) {
                throw new Error("Contraseña incorrecta");
            }
        }
        return true;
    })
];

module.exports = loginValidation;