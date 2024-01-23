const { getTodosController } = require("./getTodosContorller");
const { patchAddTodoController } = require("./patchAddTodoController");

const TodosController = {
  getTodos: getTodosController,
  addTodo: patchAddTodoController,
};

module.exports = {
  TodosController,
};
