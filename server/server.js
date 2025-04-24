// server.js
const express = require('express');
const app = express();

app.post('/api/recargas', (req, res) => {
  // 1. Registrar en BD
  // 2. Notificar al SIM embebido (ej: via MQTT)
  console.log(`Recarga de $${req.body.amount} para ${req.body.phone}`);
  res.json({ success: true });
});

app.listen(3001, () => console.log('Backend running on port 3001'));