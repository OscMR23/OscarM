const express = require('express');
const router = express.Router();

// Datos simulados (esto será reemplazado por la base de datos)
let tasks = [];

// Crear tarea
router.post('/', (req, res) => {
    const { title, description, type } = req.body;
    const newTask = { id: tasks.length + 1, title, description, type, status: 'pending' };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Listar todas las tareas
router.get('/', (req, res) => {
    res.json(tasks);
});

// Obtener tarea por ID
router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    task ? res.json(task) : res.status(404).json({ message: 'Tarea no encontrada' });
});

// Actualizar tarea
router.put('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (task) {
        const { title, description, status } = req.body;
        task.title = title || task.title;
        task.description = description || task.description;
        task.status = status || task.status;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

// Eliminar tarea
router.delete('/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index !== -1) {
        tasks.splice(index, 1);
        res.json({ message: 'Tarea eliminada' });
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

module.exports = router;
