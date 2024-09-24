const express = require("express");
const app = express();
const cors = require('./Rutas/clientes.js'); // Definición de rutas
const mysql = require("mysql2/promise");

// Crear la conexión
let connection;
async function createConnection() {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "clientes",
  });
}

// Iniciar el servidor
async function startServer() {
  try {
    await createConnection();
    app.use(express.json());
    app.use('/cliente', require('./Rutas/clientes.js')(connection)); // Pasar la conexión
    app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
  } catch (err) {
    console.error("Error al iniciar el servidor:", err);
  }
}

startServer();
