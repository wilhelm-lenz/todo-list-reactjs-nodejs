const { getAllTodos } = require("./getAllTodos.js");
const { addTodo } = require("./addTodo.js");
const { patchToggleTodoDone } = require("./patchToggleTodoDone.js");

const TodoService = {
  getAllTodos,
  addTodo,
  patchToggleTodoDone,
};

module.exports = {
  TodoService,
};
