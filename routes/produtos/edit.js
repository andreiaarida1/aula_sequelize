const express=require('express');
const router=express.Router();
const produtos = require('../../controllers/produtos/edit');

router.get('/', produtos.edit);

module.exports=router;