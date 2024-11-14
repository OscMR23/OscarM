const express = require("express"); // Importa el módulo Express
const app = express();              // Crea una instancia de la aplicación Express
const cors = require("cors");        // Importa el módulo CORS

app.use(cors()); // Habilita CORS para permitir solicitudes de otros dominios, si es necesario

app.get("/empleado", (req, res) => {
    res.json({ message : 'Servidor funcionando en 3001'}); // Responde con un mensaje JSON
});

app.listen(3001, () => console.log("Server is listening on 3001")); // Inicia el servidor en el puerto 8082
