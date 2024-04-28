const express = require("express");
const app = express();
require("dotenv").config();
const {
  getAllTodos,
  createTodo,
  checkTodo,
  deleteTodo,
} = require("./controller");
// const initDb = require("../loaders/initDB");
const cors = require("cors");

// initDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from server");
});

app.get("/list", getAllTodos);

app.post("/", createTodo);

app.put("/", checkTodo);

app.delete("/", deleteTodo);

app.listen(3000, () => console.log("App is listening on port 3000"));
