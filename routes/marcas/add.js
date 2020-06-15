const express=require('express');
const router=express.Router();
const marcas = require('../../controllers/marcas/insert');

router.get('/', marcas.save);

module.exports=router;