const express = require('express');
const router = express.Router();
const produtos = require('../../controllers/produtos/update');

router.post('/', produtos.update);

module.exports = router;