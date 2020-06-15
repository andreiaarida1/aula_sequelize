const fs = require('fs');
const { Produtos } = require('../../models');

module.exports = {
  update: (req, res) => {
    const data = {
      produto: req.body.produto,
      marca: req.body.marca,
      preco: req.body.preco
    }

    Produtos.update(data, {
      where: { id: req.body.id }
    }).then(rows => {
      res.redirect('/produtos')
    })
  }
}