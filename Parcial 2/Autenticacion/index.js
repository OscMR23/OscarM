const express = require('express');
const cors = require('cors');
const multer  = require('multer');
const basicAuth = require('express-basic-auth'); // Importar el módulo de autenticación básica
const mysql = require('mysql2'); // Importar el módulo de MySQL

const app = express();
const upload = multer();
const bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);

app.use(cors({origin:'*'}));  // middleware de terceros
app.use(express.json()); // middleware
app.use(express.text()); // middleware
app.use(express.urlencoded({extended:true}));  // middleware
app.use(upload.none());
app.use(bodyParser.xml());

// Configuración de la base de datos
const connection = mysql.createConnection({
    host: 'localhost',       // Host donde corre tu base de datos
    user: 'root',            // Usuario de la base de datos
    password: '', // Contraseña del usuario
    database: 'clientes' // Nombre de la base de datos
});

// Probar la conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión a la base de datos exitosa');
    }
});

// Middleware de autenticación básica
app.use(basicAuth({
    users: { 'admin': 'siri1221' },  // Usuario y contraseña
    challenge: true  // Para que el navegador pida las credenciales
}));

// Ruta para manejar el POST de clientes (insertar)
app.post('/clientes', (req, res) => {
    const { nombre, edad } = req.body;

    // Consulta de inserción en la base de datos
    const query = `INSERT INTO clientes (nombre, edad) VALUES (?, ?)`;

    // Ejecutar la consulta
    connection.query(query, [nombre, edad], (err, results) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            res.status(500).json({ mensaje: 'Error al insertar el cliente' });
        } else {
            console.log('Cliente insertado correctamente:', results);
            res.json({ mensaje: 'Cliente insertado correctamente' });
        }
    });
});

// Ruta para consultar todos los clientes (GET)
app.get('/clientes', (req, res) => {
    // Consulta para obtener todos los clientes
    const query = 'SELECT * FROM clientes';

    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error al consultar los clientes:', err);
            res.status(500).json({ mensaje: 'Error al consultar los clientes' });
        } else {
            console.log('Clientes consultados:', results);
            res.json(results); // Devolver los resultados en formato JSON
        }
    });
});

app.listen(3001, () => {
    console.log('Escuchando Server Express puerto 3001');
});
