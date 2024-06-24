const { body } = require("express-validator");
const db = require("../database/models");
const bcrypt = require('bcryptjs')

const editValidation = [
    body("email")
        .optional()
        .isEmail().withMessage("Ingrese un email válido, por favor").bail(),
    body("usuario")
        .optional(),
    body("password")
        .optional()
        .custom((value, { req }) => {
            if (!value && !req.body.password) {
                return true;
            }
            if (value && value.length < 4) {
                throw new Error("La contraseña debe tener un mínimo de 4 caracteres");
            }
            return true;
        }),
    body("fecha")
        .optional(),
    body("dni")
        .optional({ checkFalsy: true }).isNumeric().withMessage("El DNI debe ser numérico si se proporciona"),
];


module.exports = editValidation;