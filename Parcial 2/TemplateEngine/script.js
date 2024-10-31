const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'Oscar', password: bcrypt.hashSync('1234', 8) }, // Password encriptada
];

// Clave secreta para firmar el JWT
const SECRET_KEY = 'mi_secreto';

// Ruta de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    // Genera el token
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ auth: true, token });
  } else {
    res.status(401).json({ auth: false, message: 'Credenciales incorrectas' });
  }
});

// Middleware para verificar el token
function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    req.userId = decoded.id;
    next();
  });
}

// Ruta protegida
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: `Bienvenido, usuario con ID: ${req.userId}` });
});

app.listen(3001, () => {
  console.log('Servidor en http://localhost:3001');
});
