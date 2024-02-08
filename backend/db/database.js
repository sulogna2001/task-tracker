const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_KEY,
    database: "todo_db"
});

// open the MySQL connection
db.connect(error => {
    if (error) throw error;
    console.log("DB connected");
});

module.exports = db;
