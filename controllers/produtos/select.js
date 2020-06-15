const fs = require('fs');
const { Produtos } = require('../../models');

module.exports = {
 show: (req, res) => {
   Produtos.findAll({
     attributes: ['id', 'marca', 'marca', 'descricao'],
     include: ['m']
   }).then((results) => {
     res.render('marcas/marcas', { data: results })
   })
 }
}