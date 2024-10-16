// server.js o app.js
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clientes'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta para manejar la solicitud POST y agregar un cliente
app.post("/cliente", [
    check('id_Cliente').isInt().withMessage('El ID del cliente debe ser un número entero.'),
    check('nombre').isString().isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres.'),
    check('direccion').notEmpty().withMessage('La dirección no puede estar vacía.'),
], (req, res) => {
    const result = validationResult(req);
    
    if (!result.isEmpty()) {
        return res.status(400).json({ errores: result.array() });
    }

    // Insertar el cliente en la base de datos
    const { id_Cliente, nombre, direccion } = req.body;
    const query = 'INSERT INTO clientes (id_Cliente, nombre, direccion) VALUES (?, ?, ?)';
    db.query(query, [id_Cliente, nombre, direccion], (err, result) => {
        if (err) {
            console.error('Error al insertar en la base de datos:', err);
            return res.status(500).json({ mensaje: 'Error al insertar en la base de datos' });
        }
        res.json({ mensaje: 'Cliente agregado correctamente' });
    });
});

// Escuchar en el puerto 8001
app.listen(8001, () => {
    console.log("Servidor express escuchando en el puerto 8001");
});
