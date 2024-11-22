const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//Configuracion para el uso peticiones post
app.use(bodyParser.urlencoded({ extended: false }));

//Configuración para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

//Plantillas Dinámicas
app.set('view engine', 'ejs');

//Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '1234', // tu contraseña de MySQL
    database: 'registros',
    port: 3306
});


//Comprobacion de la conexión de la base de datos
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

//INICIALIZACIÓN DEL SERVER
const port = 3006;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});

//Ruta index
app.get('/', (req, res) => {
    const query = 'SELECT * FROM usuarios';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('index', { usuarios: results });
        }
    });
});

//Agregar usuarios
app.get('/agregar/', (req, res) => {
    res.render('agregar');
});

app.post('/add', (req, res) => {
    const { nombre, ap_paterno, ap_materno, edad, oficio, correo, telefono, direccion } = req.body;
    const query = 'INSERT INTO usuarios (nombre, ap_paterno, ap_materno, edad, oficio, correo, telefono, direccion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre,ap_paterno, ap_materno, edad, oficio, correo, telefono, direccion], (err) => {
        if (err) {
            console.error('Error adding user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

//Editar usuario
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM usuarios WHERE id_usr = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else {
            res.render('edit', { usuarios: results[0] });
        }
    });
});

//Eliminar usuario
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM usuarios WHERE id_usr = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

//Actualzar usuario
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, correo } = req.body;
    const query = 'UPDATE usuarios SET nombre = ?, ap_paterno = ?, ap_materno = ?, edad = ?, oficio = ?, correo = ?, telefono = ?, direccion = ? WHERE id_usr = ?';
    db.query(query, [nombre, ap_paterno, ap_materno, edad, oficio, correo, telefono, direccion, id], (err) => {
        if (err) {
            console.error('Error adding user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});