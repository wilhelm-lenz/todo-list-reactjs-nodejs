const express = require("express");
const { TodosController } = require("../controllers");

const todoRouter = express.Router();

todoRouter.get("/", TodosController.getTodos);

todoRouter.post("/", TodosController.addTodo);

// todoRouter.patch("/:todoId/toggleDone", TodosController);

module.exports = {
  todoRouter,
};
