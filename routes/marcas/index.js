const express=require('express');
const router=express.Router();
const marcas = require('../../controllers/marcas/select');
const lista = require('../../controllers/marcas/list');

router.get('/', marcas.show);
router.get('/list', lista.show);



module.exports=router;