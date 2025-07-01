const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email, phone, exchange, portfolio, interest } = req.body;

  const query = `
    INSERT INTO leads (name, email, phone, exchange, portfolio, interest, created_at)
    VALUES (?, ?, ?, ?, ?, ?, NOW())
  `;

  db.execute(query, [name, email, phone, exchange, portfolio, interest])
    .then(() => {
      res.status(200).json({ message: 'Success' });
    })
    .catch((err) => {
      console.error('MySQL insert error:', err);
      res.status(500).json({ error: 'Database error' });
    });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
