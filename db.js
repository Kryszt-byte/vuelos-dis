const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "vuelos",
  port: 3306
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Error conectando a MySQL:", err);
  } else {
    console.log("✅ MySQL conectado");
    connection.release();
  }
});

module.exports = db;
