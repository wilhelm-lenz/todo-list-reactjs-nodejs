const { saveAllTodos, loadAllTodos } = require("../data-access");

const addTodo = (newTodo) => {
  return loadAllTodos()
    .then((todso) => [...todso, newTodo])
    .then((newTodosArray) => saveAllTodos(newTodosArray));
};

module.exports = {
  addTodo,
};
