const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');


const app = express();

//Configuracion para el uso peticiones post
app.use(bodyParser.urlencoded({ extended: false }));


//Plantillas dinamicas
app.set('view engine', 'ejs');

//Crear la conexion
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '12345678', // tu contraseña de MySQL
    database: 'baseDatos',
    port: 3306
});


//Comprobacion de la conexion de la base de datos
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the MySQL database');
    }
});

//Iniciamos el server
const port = 3306;
app.listen(port, ()=>{
    console.log(`Servidor funcionando en http://localhost:${port}`);
});

//Index
app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});


//Agregar usuarios
app.post('/add', (req, res) => {
    const { name, email } = req.body;
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
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
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.send('Error');
        } else {
            res.render('edit', { user: results[0] });
        }
    });
});

//Eliminar usuario
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting user:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});
