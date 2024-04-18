const users = require('../db/database.js/usuarios')
const userController = {
main: function (req,res) {
    res.send('algo')
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
}
module.exports = userController