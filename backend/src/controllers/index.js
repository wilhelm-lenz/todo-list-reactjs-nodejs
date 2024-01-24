const { getTodosController } = require("./getTodosContorller");
const { postAddTodoController } = require("./postAddTodoController");
const { patchToggleTodoController } = require("./pachToggleTodoController");
const { deleteTodoController } = require("./deleteTodoController");

const TodosController = {
  getTodos: getTodosController,
  addTodo: postAddTodoController,
  patchToggleTodo: patchToggleTodoController,
  deleteTodo: deleteTodoController,
};

module.exports = {
  TodosController,
};
