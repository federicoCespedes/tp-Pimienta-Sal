const platos_db = require('../data/platos.json');

module.exports = {
    index : (req,res) => {
        return res.render('index',{
            platos : platos_db
        })
    },
    detail : (req,res) =>   res.render('detalleMenu')
    
}