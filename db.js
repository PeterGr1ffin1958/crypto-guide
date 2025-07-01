const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "твой_пароль",
  database: "crypto_guide"
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Ошибка подключения к MySQL:", err.message);
    return;
  }
  console.log("✅ Подключение к MySQL установлено");
});

module.exports = connection;

