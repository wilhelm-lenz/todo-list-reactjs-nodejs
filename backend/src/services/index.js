const { getAllTodos } = require("./getAllTodos.js");
const { addTodo } = require("./addTodo.js");
const { patchToggleTodoDone } = require("./patchToggleTodoDone.js");
const { deleteTodo } = require("./deleteTodo.js");

const TodoService = {
  getAllTodos,
  addTodo,
  patchToggleTodoDone,
  deleteTodo,
};

module.exports = {
  TodoService,
};
