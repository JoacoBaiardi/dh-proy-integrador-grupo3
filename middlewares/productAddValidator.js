const { body } = require("express-validator");
const db = require("../database/models"); 
const bcryptjs = require('bcryptjs');


const productAddValidation = [
    body("foto")
        .notEmpty()
        .withMessage("Debes cargar una foto")
        .bail(),

    body("producto")
        .notEmpty()
        .withMessage("Especifique el nombre del producto")
        .bail(),


    body("descripcion")
        .notEmpty()
        .withMessage("Da una descripcion detallada del producto")


]

module.exports = productAddValidation;