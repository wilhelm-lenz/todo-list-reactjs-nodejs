const { readJsonFilePromise, writeJsonFilePromise } = require("./fileStytem");

const todosJsonFilePath = __dirname + "../../data/todos-data.json";

const loadAllTodos = () => {
  return readJsonFilePromise(todosJsonFilePath);
};

const saveAllTodos = (newTodosArray) => {
  return writeJsonFilePromise(todosJsonFilePath, newTodosArray);
};

module.exports = {
  loadAllTodos,
  saveAllTodos,
};
