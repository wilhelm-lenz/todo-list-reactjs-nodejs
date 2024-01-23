const { readJsonFilePromise, writeJsonFilePromise } = require("./fileStytem");
const path = require("path");

const todosJsonFilePath = path.join(
  __dirname,
  "..",
  "..",
  "data",
  "todos-data.json"
);

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
