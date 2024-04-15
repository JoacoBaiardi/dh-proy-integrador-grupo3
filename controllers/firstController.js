const firstdata = require('../db/firstdata')
const controller = {
main: function (req,res) {
    res.send('algo')
},
detail: function (req,res) {
        const id = req.params.id
        for (let i = 0; i < firstdata.length; i++) {
            if (Number(id)===Number(firstdata[i].id)) {
                res.send(`algo ${firstdata[i].algo}.`)
            }
        }
        res.send('no se encontro') 
    },
}
module.exports = controller