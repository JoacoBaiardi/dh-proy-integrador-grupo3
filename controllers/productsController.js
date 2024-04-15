const seconddata = require('../db/seconddata')
const controller = {
main: function (req,res) {
    res.send('algo')
},
detail: function (req,res) {
        const id = req.params.id
        for (let i = 0; i < seconddata.length; i++) {
            if (Number(id)===Number(seconddata[i].id)) {
                res.send(`algo ${seconddata[i].algo}.`)
            }
        }
        res.send('no se encontro') 
    },
}
module.exports = controller