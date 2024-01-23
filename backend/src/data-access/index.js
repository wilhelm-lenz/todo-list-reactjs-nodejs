const { removeFile } = require("./fileStytem.js");
const { loadAllTodos, saveAllTodos } = require("./todosDAO.js");

module.exports = {
  loadAllTodos,
  saveAllTodos,
  removeFile,
};
