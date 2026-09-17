// server.js
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve la carpeta 'build' que genera Create React App
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/hola', (req, res) => {
  res.json({ mensaje: '¡Hola desde Node.js!' });
});

// Redirige cualquier otra ruta al index.html de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// server.js
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});