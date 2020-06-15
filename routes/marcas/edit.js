const express=require('express');
const router=express.Router();
const marcas = require('../../controllers/marcas/edit');

router.get('/', marcas.edit);

module.exports=router;