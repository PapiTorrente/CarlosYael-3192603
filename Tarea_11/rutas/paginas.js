const express = require('express');
const path = require("path");

const router = express.Router();

router.get('/calculadora',(req,res)=>{
    res.sendFile(path.join(__dirname, '../publico', '/calculadora.html'));
});


router.get('/qr',(req,res)=>{
    res.sendFile(path.join(__dirname, '../publico', '/qr.html'));
});

router.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname, '../publico', '/formulario.html'));
});

module.exports = router;