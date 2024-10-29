const express = require('express');
const router = express.Router();
const path = require("path");


router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + "/inicio.html"));
});

router.get('/formulario',(req,res)=>{
    res.sendFile(path.join(__dirname + "/formulario.html"));
});

router.get('/informacion',(req,res)=>{
    res.sendFile(path.join(__dirname + "/informacion.html"));
});

module.exports = router;