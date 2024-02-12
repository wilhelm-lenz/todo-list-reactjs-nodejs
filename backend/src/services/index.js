const { getAllTodos } = require("./todoService/getAllTodos");
const { getOneTodo } = require("./todoService/getOneTodo");
const { postAddTodo } = require("./todoService/postAddTodo");
const { patchToggleTodoDone } = require("./todoService/patchToggleTodoDone");
const { deleteOneTodo } = require("./todoService/deleteOneTodo");

const { registerUser } = require("./userService/registerUser");

const TodoService = {
  getAllTodos,
  getOneTodo,
  postAddTodo,
  patchToggleTodoDone,
  deleteOneTodo,
};

const UserService = {
  registerUser,
};

module.exports = {
  TodoService,
  UserService,
};
