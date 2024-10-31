const express = require('express');
const path = require('path');
const rutasPags = require('./rutas/paginas');

const app = express();
const port = 3006;

app.use(express.static('publico'));

app.use('/', rutasPags);

app.get('/', (req, res) => {
    res.redirect('/calculadora');
});

app.listen(port,()=>{
    console.log(console.log(`Servidor en: http://localhost:${port}`));
});