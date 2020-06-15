const fs = require('fs');
const { Produtos } = require('../../models');

module.exports = {
  save: (req, res) => {
    const data = {
      marca: req.body.marca,
      descricao: req.body.descricao,
      preco: req.body.preco,
      marca: req.body.marca,
    }

    Produtos.create(data).then((results) => {
      res.redirect('/produtos');
    });
  }
}