const { getAllTodos } = require("./getAllTodos.js");
const { addTodo } = require("./addTodo.js");

const TodoService = {
  getAllTodos,
  addTodo,
};

module.exports = {
  TodoService,
};
