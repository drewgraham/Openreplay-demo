const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const port = process.env.PORT || 3000;

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres',
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
