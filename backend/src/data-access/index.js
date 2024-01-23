const { removeFile } = require("./fileStytem");
const { loadAllTodos, saveAllTodos } = require("./todosDAO");

module.exports = {
  loadAllTodos,
  saveAllTodos,
  removeFile,
};
