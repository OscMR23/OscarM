// app.js
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = 'tu_secreto_aqui';

// Middleware para verificar el token JWT
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Ruta de inicio de sesión para obtener un token JWT
app.post('/login', (req, res) => {
    // Este es solo un ejemplo, usa un método adecuado para autenticar al usuario
    const { username, password } = req.body;

    // Verifica las credenciales (esto es solo un ejemplo; en producción, consulta tu base de datos)
    if (username !== 'oscar' || password !== 'siri') {
        return res.status(403).json({ message: 'Credenciales inválidas' });
    }

    // Genera el token JWT con el payload deseado
    const user = { name: username };
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' }); // Expira en 1 hora

    res.json({ token });
});

// Ruta protegida que requiere un token válido
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Acceso concedido a ruta protegida', user: req.user });
});

// Inicializa el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
