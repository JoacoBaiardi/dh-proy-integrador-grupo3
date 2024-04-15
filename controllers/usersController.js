const users = require('../db/users')
const controller = {
main: function (req,res) {
    res.send('algo')
},
detail: function (req,res) {
        const id = req.params.id
        for (let i = 0; i < users.length; i++) {
            if (Number(id)===Number(users[i].id)) {
                res.send(`algo ${users[i].algo}.`)
            }
        }
        res.send('no se encontro') 
    },
}
module.exports = controller