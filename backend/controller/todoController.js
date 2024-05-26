const db = require("../db/database.js");

//CREATE DATABASE
exports.createDB = (req, res) => {
  let q = "CREATE DATABASE todolist";
  db.query(q, (err, result) => {
    if (err) throw err;
    return res.status(201).json("DB created");
  });
};

exports.createTable = (req, res) => {
  let q = `CREATE TABLE tasklist(
      id INT AUTO_INCREMENT,
      task VARCHAR(255),
      created_at DATETIME,
      updated_at DATETIME,
      PRIMARY KEY(id)
    )`;
  db.query(q, (err, result) => {
    if (err) throw err;
    return res.status(201).json("TABLE CREATED");
  });
};

// CREATE LIST
exports.createList = (req, res) => {
  const { task } = req.body;

  // Check if the task is empty
  if (!task || task.trim() === "") {
    return res.status(400).json({ error: "Task cannot be empty" });
  }

  const q = "INSERT INTO tasklist SET ?";
  const createdAt = new Date();
  const data = { task, created_at: createdAt };

  db.query(q, data, (err, result) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(result);
  });
};

//SHOW TODOS
exports.showTodos = (req, res) => {
  const q = "SELECT * FROM tasklist";

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

//SHOW SINGLE TODO
exports.singleTodo = (req, res) => {
  const q = `SELECT * FROM tasklist where id=${req.params.id}`;

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result[0]);
  });
};

// UPDATE TODO
exports.updateTodo = (req, res) => {
  const { task } = req.body;

  const q = `UPDATE tasklist SET ? WHERE id=${req.params.id}`;
  const data = { task };

  db.query(q, data, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

//DELETE SINGLE TODO
exports.deleteSingleTodo = (req, res) => {
  const q = `DELETE FROM tasklist  WHERE id=${req.params.id}`;

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json({ data: "Todo deleted" });
  });
};
