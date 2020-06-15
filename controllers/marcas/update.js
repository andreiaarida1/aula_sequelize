const fs = require('fs');
const { Marcas } = require('../../models');

module.exports = {
  update: (req, res) => {
    const data = {
      marca: req.body.marca,
      descricao: req.body.descricao
    }

    Marcas.update (data, {
      where: {
        id: req.body.id
      }
    }).then(rows => {
      res.redirect('/marcas')
    })
  }
}