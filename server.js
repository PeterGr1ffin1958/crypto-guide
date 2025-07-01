const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(express.static(__dirname));
app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  const { name, email, phone, exchange, portfolio, interest } = req.body;
  db.query(
    "INSERT INTO leads (name, email, phone, exchange, portfolio, interest) VALUES (?, ?, ?, ?, ?, ?)",
    [name, email, phone, exchange, portfolio, interest],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Database error");
      } else {
        res.send("✅ Your request was submitted!");
      }
    }
  );
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));

app.get("/", (req, res) => {
  const { name, email, phone, exchange, portfolio, interest } = req.query;

  if (!name || !email || !phone) {
    return res.status(400).send("Missing required query parameters");
  }

  const sql = `
    INSERT INTO leads (name, email, phone, exchange, portfolio, interest)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [name, email, phone, exchange, portfolio, interest];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ Ошибка при вставке из URL:", err.message);
      return res.status(500).send("Ошибка при сохранении из URL");
    }

    console.log("✅ Данные из URL сохранены:", result.insertId);
    res.send("✅ Ваши данные успешно сохранены через ссылку!");
  });
});
