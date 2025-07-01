const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost", // или внешний хост при удалённой базе
  user: "root",
  password: "IgO11012007",
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

app.use(express.json());
app.use(express.static(__dirname)); // ✅ вот здесь — правильно

