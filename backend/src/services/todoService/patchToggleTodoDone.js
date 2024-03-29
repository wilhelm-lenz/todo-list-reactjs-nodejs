// const { loadAllTodos, saveAllTodos } = require("../../data-access");

// const patchToggleTodoDone = async (todoId) => {
//   const todos = await loadAllTodos();

//   const updatedTodos = todos?.map((todo) => {
//     return todo.id.toString() === todoId ? { ...todo, done: !todo.done } : todo;
//   });

//   await saveAllTodos(updatedTodos);

//   return updatedTodos;
// };

// module.exports = {
//   patchToggleTodoDone,
// };

const { TodoDAO } = require("../../data-access");

exports.patchToggleTodoDone = async (todoId, statusUpdate) => {
  const updatedTodo = await TodoDAO.updateOne(todoId, statusUpdate);
  return updatedTodo;
};
