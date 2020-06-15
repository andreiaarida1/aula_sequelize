const fs = require('fs');
const { Marcas } = require('../../models');

module.exports = {
  save: (req, res) => {
    const data = {
      marca: req.body.marca,
      descricao: req.body.descricao
    }

    Marcas.create(data).then((results) => {
      res.redirect('/marcas');
    });
  }
}