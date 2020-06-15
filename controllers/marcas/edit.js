const fs = require('fs');
const { Marcas } = require('../../models');

module.exports = {
  edit: (req, res) => {
    Marcas.findOne({
      where: {
        id: req.query.id
      }
    }).then((results) => {
      res.render('marcas/edit', { data: results })
    })
  }
}