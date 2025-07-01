const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Подключение к базе данных
const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12787843",
  password: "e9PgwSxVCn",
  database: "sql12787843",
  port: 3306,
});

// Проверка подключения
db.connect((err) => {
  if (err) {
    console.error("❌ Ошибка подключения к MySQL:", err);
  } else {
    console.log("✅ Подключение к MySQL установлено");
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// POST обработчик
app.post("/submit", (req, res) => {
  const { name, email, phone, exchange, portfolio, interest } = req.body;

  const query = `
    INSERT INTO leads (name, email, phone, exchange, portfolio, interest)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [name, email, phone, exchange, portfolio, interest], (err, results) => {
    if (err) {
      console.error("❌ Ошибка при сохранении данных:", err);
      return res.status(500).json({ status: "error", message: "Ошибка при сохранении данных" });
    }

    console.log("✅ Данные успешно сохранены:", results);
    res.status(200).json({ status: "success" });
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
