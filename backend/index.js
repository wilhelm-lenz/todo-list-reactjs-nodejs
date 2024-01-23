const logger = require("morgan");
const express = require("express");
const cors = require("cors");
const { body } = require("express-validator");
const {
  readJsonFilePromise,
  writeJsonFilePromise,
} = require("./src/data-access/fileStytem");

const app = express();

const OK = 200;
const INTERNAL_SERVER_ERROR = 500;

app.use(cors()); // Cors Policy
app.use(logger("dev")); // Ersatz für die untere Middleware mit schöneren log Anzeigen
// app.use((req, _, next) => {
//   console.log("New Request: ", req.method, req.url);
//   next();
// });

app.use(express.json());

app.get("/api/todos", (_, res) => {
  readJsonFilePromise("./data/todos-data.json")
    .then((todos) => res.status(OK).json({ success: true, articles: todos }))
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Faild to load todos Server Error" });
    });
});

app.post("/api/todos", (req, res) => {
  const date = new Date(Date.now());
  const day = date.getDate();
  // const weekday = date.toLocaleString("default", { weekday: "long" });
  // const monthNameShort = date.toLocaleString("default", { month: "short" });
  const monthNumber = date.getMonth();
  const fullYear = date.getFullYear();
  // body wurde auf Zeile 15 geparses zu einem JavaScript Object
  const newTodoTask = req.body.task;
  const newTodo = {
    id: Date.now(),
    task: newTodoTask,
    done: false,
  };
  if (!newTodo.created_at) {
    newTodo.created_at = `${fullYear}-${monthNumber < 10 ? 0 : null}${
      monthNumber + 1
    }-${day}`;
  }
  console.log(newTodoTask);
  readJsonFilePromise("./data/todos-data.json")
    .then((todos) => [...todos, newTodo])
    .then((newTodosArray) =>
      writeJsonFilePromise("./data/todos-data.json", newTodosArray)
    )
    .then((newTodosArray) =>
      res.status(OK).json({ success: true, articles: newTodosArray })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Faild to load todos" });
    });
});

app.patch("/api/todos/:todoId/toggleDone", (req, res) => {
  const todoId = req.params.todoId;

  readJsonFilePromise("./data/todos-data.json")
    .then((todos) => {
      const updatedTodos = todos.map((todo) =>
        todo.id.toString() === todoId ? { ...todo, done: !todo.done } : todo
      );
      return updatedTodos;
    })
    .then((newTodosArray) =>
      writeJsonFilePromise("./data/todos-data.json", newTodosArray)
    )
    .then((newTodosArray) =>
      res.status(OK).json({ success: true, articles: newTodosArray })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Faild to load todos" });
    });
});

app.delete("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  readJsonFilePromise("./data/todos-data.json")
    .then((todos) => {
      const todosWithoutDeletedTodo = todos.filter(
        (todo) => todo.id.toString() !== todoId
      );
      return todosWithoutDeletedTodo;
    })
    .then((newTodosArray) =>
      writeJsonFilePromise("./data/todos-data.json", newTodosArray)
    )
    .then((newTodosArray) =>
      res.status(OK).json({ success: true, articles: newTodosArray })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Faild to delete todo" });
    });
});

app.use((_, res) => {
  res.status(404).json({ success: false, error: "Route not found" });
});

const PORT = 3064;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => console.log(`Server runs on ${HOST}:${PORT}`));
