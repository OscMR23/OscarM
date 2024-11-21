const express = require("express");
const path = require("path"); // Importa el módulo Express
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc"); // Crea una instancia de la aplicación Express
const cors = require("cors"); // Importa el módulo CORS
const port = process.env.PORT || 8082;



app.use(cors()); // Habilita CORS para permitir solicitudes de otros dominios, si es necesario

app.get("/empleado", (req, res) => {
  res.json({ message: "Servidor funcionando en 8082" }); // Responde con un mensaje JSON
});

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Tareas",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:${port}" }],
  },
  apis: [`${path.join(__dirname, "index.js")}`],
};

/**
 * @swagger
 * /empleado:
 *   get:
 *     description: Consultar todos los empleados
 *     responses:
 *       200:
 *          description: Regresa un arreglo de objetos con los empleados.
 */

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get("/api-spec",(req,res)=>{
  res.json(swaggerDocs)
})

app.listen(port, () => console.log("Server is listening on ${port}")); // Inicia el servidor en el puerto 8082
