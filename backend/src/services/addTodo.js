const { saveAllTodos, loadAllTodos } = require("../data-access");

const addTodo = async (newTodo) => {
  const todos = await loadAllTodos();
  const newTodosArray = [...todos, newTodo];
  await saveAllTodos(newTodosArray);
};

module.exports = {
  addTodo,
};
