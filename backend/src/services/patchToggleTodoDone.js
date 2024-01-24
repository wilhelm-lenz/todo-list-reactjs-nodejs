const { loadAllTodos, saveAllTodos } = require("../data-access");

const patchToggleTodoDone = (todoId) => {
  return loadAllTodos()
    .then((todos) => {
      if (!todos) throw new Error("Keine Todos geladen");
      const updatedTodos = todos?.map((todo) => {
        if (!todo || todo.id === undefined) {
          throw new Error("Ungültiges Todo-Objekt");
        }
        return todo.id.toString() === todoId
          ? { ...todo, done: !todo.done }
          : todo;
      });
      return updatedTodos;
    })
    .then((newTodosArray) => saveAllTodos(newTodosArray));
};

module.exports = {
  patchToggleTodoDone,
};
