const express = require('express');
const router = express.Router();
const marcas = require('../../controllers/marcas/insert')

router.post('/', marcas.save);

module.exports = router;