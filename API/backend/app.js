const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/task.js'); // Importa las rutas

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Usar las rutas de tareas
app.use('/tasks', taskRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de Tareas!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
