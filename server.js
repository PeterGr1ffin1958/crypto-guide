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
