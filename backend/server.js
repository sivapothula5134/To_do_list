require("dotenv").config();

const PORT = process.env.PORT || 5000;

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

/* Add task */
app.post("/add", (req, res) => {
  const { task } = req.body;
  db.query("INSERT INTO tasks (task) VALUES (?)", [task], () => {
    res.send("Task added");
  });
});

/* Get tasks */
app.get("/tasks", (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    res.json(result);
  });
});

/* Delete task */
app.delete("/delete/:id", (req, res) => {
  db.query("DELETE FROM tasks WHERE id=?", [req.params.id], () => {
    res.send("Deleted");
  });
});

app.listen(5000, () => {
  console.log("Server running on port {PORT}");
});
