const express=require('express');
const router=express.Router();
const produtos = require('../../controllers/produtos/insert')

router.post('/', produtos.save);

module.exports=router;