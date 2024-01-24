const express = require("express");
const { TodosController } = require("../controllers");

const todoRouter = express.Router();

todoRouter.get("/", TodosController.getTodos);

todoRouter.post("/", TodosController.addTodo);

todoRouter.patch("/:todoId/toggleDone", TodosController.patchToggleTodo);

// todoRouter.delete("/:todoId", TodosController.deleteTodo);

module.exports = {
  todoRouter,
};
