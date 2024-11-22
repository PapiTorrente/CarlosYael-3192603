const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//Configuracion para el uso peticiones post
app.use( bodyParser.urlencoded({extended:false}));

//Plantillas que sean dinamicas
app.set('view engine','ejs');

//Crear la conexion
const db = mysql.createConnection({
    host: 'localhost',//server
    user: 'root',//usuario de la DB
    password: '1234',//pass de tu DB
    database: 'baseDatos',//nombre de la base de datos
    port: 3306//puerto
});

//Comprobacion de la conexion de la base de datos
db.connect(err=>{
    if(err){
        console.log(`Error en la conexion de base de datos ${err}`);
    }else {
        console.log(`La base de datos funciona y esta conectada.`);    
    }
});

//Iniciamos el server
const port = 3306;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});