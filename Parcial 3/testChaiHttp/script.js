const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // Habilitar CORS si es necesario

app.get("/empleado", (req, res) => {
    res.json({ message : 'Servidor funcionando en 8082'});
});

app.listen(8082, () => console.log("Server is listening on 8082"));
