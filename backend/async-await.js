const { loadAllTodos, saveAllTodos } = require("../data-access");

const toggleTodoDone = async (todoId) => {
  const todos = await loadAllTodos();

  const updatedTodos = todos.map((todo) => {
    if (todo.id.toString() === todoId) {
      return { ...todo, done: !todo.done }; // updated todo object
    } else {
      return todo;
    }
  });

  await saveAllTodos(updatedTodos);

  console.log(
    "Info: Todos geupdated, altes Todos Array:",
    todos,
    " & neues Todos Array:",
    newTodosArray
  );

  return updatedTodos;
};

// todoId: string --> toggleTodoDone() --> Promise { newTodosArray }

module.exports = {
  toggleTodoDone,
};

toggleTodoDone(1);
