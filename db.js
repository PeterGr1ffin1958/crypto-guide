const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12787843",
  password: "e9PgwSxVCn",
  database: "sql12787843",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ Ошибка подключения к MySQL:", err.message);
    return;
  }
  console.log("✅ Подключение к удалённой MySQL установлено");
});

module.exports = connection;

