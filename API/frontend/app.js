const apiUrl = 'http://localhost:3000/tasks';

// Cargar todas las tareas al iniciar
document.addEventListener('DOMContentLoaded', fetchTasks);

// Formulario de creación/actualización
const taskForm = document.getElementById('taskForm');
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const taskId = document.getElementById('taskId').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;

    const task = { title, description, type };

    if (taskId) {
        // Actualizar tarea
        await fetch(`${apiUrl}/${taskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        });
    } else {
        // Crear nueva tarea
        await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        });
    }

    taskForm.reset();
    fetchTasks();
});

// Obtener tareas y mostrarlas en la tabla
async function fetchTasks() {
    const response = await fetch(apiUrl);
    const tasks = await response.json();
    const tasksTableBody = document.getElementById('tasksTableBody');

    tasksTableBody.innerHTML = tasks
        .map(
            (task) => `
        <tr>
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>${task.description}</td>
            <td>${task.type}</td>
            <td>${task.status}</td>
            <td class="actions">
                <button class="edit" onclick="editTask(${task.id})">Editar</button>
                <button class="delete" onclick="deleteTask(${task.id})">Eliminar</button>
            </td>
        </tr>`
        )
        .join('');
}

// Editar tarea
async function editTask(id) {
    const response = await fetch(`${apiUrl}/${id}`);
    const task = await response.json();

    document.getElementById('taskId').value = task.id;
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('type').value = task.type;
}

// Eliminar tarea
async function deleteTask(id) {
    await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
    fetchTasks();
}
