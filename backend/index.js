const express = require("express");
const cors = require("cors");
const { readJsonFilePromise, writeJsonFilePromise } = require("./fsUtils");

const app = express();

const OK = 200;
const INTERNAL_SERVER_ERROR = 500;

app.use(cors());
app.use((req, _, next) => {
  console.log("New Request: ", req.method, req.url);
  next();
});

app.use(express.json());

app.get("/api/todos", (_, res) => {
  readJsonFilePromise("./todos-data.json")
    .then((todos) => res.status(OK).json({ success: true, result: todos }))
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Faild to load todos Server Error" });
    });
});

app.post("/api/todos", (req, res) => {
  // body wurde auf Zeile 15 geparses zu einem JavaScript Object
  const newTodoTask = req.body.task;
  const newTodo = {
    id: Date.now(),
    task: newTodoTask,
    done: false,
  };
  console.log(newTodoTask);
  readJsonFilePromise("./todos-data.json")
    .then((todos) => [...todos, newTodo])
    .then((newTodosArray) =>
      writeJsonFilePromise("./todos-data.json", newTodosArray)
    )
    .then((newTodosArray) =>
      res.status(OK).json({ success: true, result: newTodosArray })
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

  readJsonFilePromise("./todos-data.json")
    .then((todos) => {
      const updatedTodos = todos.map((todo) =>
        todo.id.toString() === todoId ? { ...todo, done: !todo.done } : todo
      );
      return updatedTodos;
    })
    .then((newTodosArray) =>
      writeJsonFilePromise("./todos-data.json", newTodosArray)
    )
    .then((newTodosArray) =>
      res.status(OK).json({ success: true, result: newTodosArray })
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
  readJsonFilePromise("./todos-data.json")
    .then((todos) => {
      const todosWithoutDeletedTodo = todos.filter(
        (todo) => todo.id.toString() !== todoId
      );
      return todosWithoutDeletedTodo;
    })
    .then((newTodosArray) =>
      writeJsonFilePromise("./todos-data.json", newTodosArray)
    )
    .then((newTodosArray) =>
      res.status(OK).json({ success: true, result: newTodosArray })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Faild to delete todo" });
    });
});

const PORT = 3064;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => console.log(`Server runs on ${HOST}:${PORT}`));
