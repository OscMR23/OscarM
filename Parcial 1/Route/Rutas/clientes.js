const express = require("express");
const router = express.Router();

module.exports = function (connection) {
  // Método GET
  router.get("/", async (req, res) => {
    const id_Cliente = req.query.id_Cliente;
    if (!id_Cliente) {
      return res.status(400).json({ error: "id_Cliente es requerido" });
    }
    try {
      const [results] = await connection.execute(
        "SELECT * FROM clientes WHERE id_Cliente = ?",
        [id_Cliente]
      );
      if (results.length > 0) {
        return res.json(results[0]);
      } else {
        return res.status(404).json({ error: "Cliente no encontrado" });
      }
    } catch (err) {
      console.error("Error en la consulta:", err);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Método POST
  router.post("/", async (req, res) => {
    const { id_Cliente, nombre, direccion } = req.body;
    if (!id_Cliente || !nombre || !direccion) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }
    try {
      const [result] = await connection.execute(
        "INSERT INTO clientes (id_Cliente, nombre, direccion) VALUES (?, ?, ?)",
        [id_Cliente, nombre, direccion]
      );
      res.status(201).json({
        message: "Cliente creado exitosamente",
        id: result.insertId,
      });
    } catch (err) {
      console.error("Error en la inserción:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Método DELETE
  router.delete("/:id_Cliente", async (req, res) => {
    const { id_Cliente } = req.params;
    try {
      const [result] = await connection.execute(
        "DELETE FROM clientes WHERE id_Cliente = ?",
        [id_Cliente]
      );
      if (result.affectedRows > 0) {
        res.status(200).json({ message: "Cliente eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Cliente no encontrado" });
      }
    } catch (err) {
      console.error("Error al eliminar:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  return router;
};


