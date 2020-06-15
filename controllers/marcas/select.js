 const fs = require('fs');
 const { Marcas } = require('../../models');

module.exports = {
  show: (req, res) => {
    Marcas.findAll({
      attributes: ['id', 'marca', 'descricao'],
    }).then((results) => {
      res.render('marcas/marcas', { data: results })
    })
  }
}