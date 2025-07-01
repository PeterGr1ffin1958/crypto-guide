const express = require("express");
const app = express();
const db = require("./db");
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/register", (req, res) => {
  const { name, email, phone, exchange, portfolio, interest } = req.body;

  const sql = `
    INSERT INTO leads (name, email, phone, exchange, portfolio, interest)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [name, email, phone, exchange, portfolio, interest];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Ошибка при вставке:", err.message);
      return res.status(500).send("Ошибка базы данных");
    }

    console.log("✅ POST-заявка сохранена:", result.insertId);
    res.send("✅ Данные успешно отправлены!");
  });
});

app.get("/", (req, res) => {
  const { name, email, phone, exchange, portfolio, interest } = req.query;

  if (name && email && phone) {
    const sql = `
      INSERT INTO leads (name, email, phone, exchange, portfolio, interest)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [name, email, phone, exchange, portfolio, interest];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("❌ Ошибка из URL:", err.message);
        return res.status(500).send("Ошибка сохранения из URL");
      }

      console.log("✅ GET-заявка сохранена:", result.insertId);
      return res.send("✅ Ваши данные сохранены через ссылку!");
    });
  } else {
    res.sendFile(path.join(__dirname, "index.html"));
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
