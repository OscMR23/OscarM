const express = require('express');
const app = express()
const cors = require('cors')
const multer = require('multer')
const mysql = require('mysql2/promise')
const bodyParser = require('body-parser')
require('body-parser-xml')(bodyParser)
const upload = multer();


app.use(cors({origin:"*"})) //app.use(cors()) //middleware de terceros
app.use(express.json());
app.use(express.text()); //middleware incorporado en express
// Función para crear la conexión
async function createConnection() {
return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Coloca tu contraseña aquí si es necesario
    database: 'clientes',  // Cambia el nombre de la base de datos si es necesario
    });
}

let connection;

// Inicia la conexión y maneja posibles errores
async function startServer() {
try {
    connection = await createConnection();
    console.log('Conexión a la base de datos establecida');

    // Aquí se configura el servidor
    app.use(cors());                                // Middleware de terceros
    app.use(express.json());                        // Middleware incorporado en Express
    app.use(express.text());                        // Middleware para texto
    app.use(express.urlencoded({ extended: true })); // Middleware para parsear un formulario URL en Code
    app.use(upload.none());                         // Middleware para parsear form-data
    app.use(bodyParser.xml());                      // Parseador de XML

    // Ruta para obtener el usuario por Id_Usuario
    app.get('/clientes', async (req, res) => {
      const id_Cliente = req.query.id_Cliente;  // Obtiene el parámetro de la URL

    if (!id_Cliente) {
        return res.status(400).json({ error: 'id_Cliente es requerido' });
    }

    try {
        const [ results, fields] = await connection.execute(
          'SELECT * FROM clientes WHERE id_Cliente = ?',
          [id_Cliente]  // Parámetro de la consulta
        );

        if (results.length > 0) {
          return res.json(results[0]);  // Devuelve solo el primer resultado
        } else {
        return res.status(404).json({ error: 'Cliente no encontrada' });
        }
    } catch (err) {
        console.error('Error en la consulta:', err);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
    });

    //Autoincrementable

    //Crear nuevo cliente

    app.post('/clientes', async (req, res) => {
      const { id_Cliente, nombre, direccion } = req.body; // Datos que se envían desde el cliente
      console.log('ID recibido para registrar:', id_Cliente);

      if (!id_Cliente || !nombre || !direccion) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
      }
    
      try {
        const [result] = await connection.execute(
          'INSERT INTO clientes (id_Cliente, nombre, direccion) VALUES (?, ?, ?)',
          [id_Cliente, nombre, direccion] // Aquí cambia "calle" por "direccion"
        );
    
        res.status(201).json({ message: 'Cliente creado exitosamente', id: result.insertId });
      } catch (err) {
        console.error('Error en la inserción:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    });

    // Borrar cliente 
     app.delete('/clientes/:id_Cliente', async (req, res) => {
  const { id_Cliente } = req.params; // Obtiene el parámetro de la URL
  console.log('ID recibido para eliminar:', id_Cliente);

  try {
    const [result] = await connection.execute(
      'DELETE FROM clientes WHERE id_Cliente = ?',
      [id_Cliente]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Cliente eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Cliente no encontrado' });
    }
  } catch (err) {
    console.error('Error al eliminar:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

    app.listen(3000, () => {
    console.log('Server Express escuchando en puerto 3000');
    });

    } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    }
}

startServer();