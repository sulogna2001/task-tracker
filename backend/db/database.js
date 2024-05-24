
const dotenv = require("dotenv");
const mysql = require("mysql");
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: 'root',
    password: process.env.DB_PASS,
    database: process.env.DB_DB
});
console.log(process.env.DB_PASS);
// open the MySQL connection
db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Successfully connected to the database.',db.threadId);
  });

module.exports = db;

