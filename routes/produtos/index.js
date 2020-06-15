const express=require('express');
const router=express.Router();
const produtos = require('../../controllers/produtos/select');

router.get('/', produtos.show);

module.exports=router;