const { loadAllTodos, saveAllTodos } = require("../data-access");

const deleteTodo = async (todoId) => {
  const todos = await loadAllTodos();

  const todosWithoutDeletedTodo = todos.filter(
    (todo) => todo.id.toString() !== todoId
  );

  await saveAllTodos(todosWithoutDeletedTodo);

  return todosWithoutDeletedTodo;
};

module.exports = {
  deleteTodo,
};
