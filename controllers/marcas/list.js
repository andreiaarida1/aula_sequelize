const fs = require('fs');
const { Marcas } = require('../../models');

module.exports = {
 show: (req, res) => {
   Marcas.findAll({
     attributes: ['id', 'marca'],
   }).then((results) => {
     res.json(results);
   })
 }
}