const express = require('express');
const path = require("path");

const app = express();
const port = 3006;
const routes = require('./rutas');

app.use('/',routes);

app.listen(port,()=>{
    console.log(console.log(`Servidor en: http://localhost:${port}`));
});