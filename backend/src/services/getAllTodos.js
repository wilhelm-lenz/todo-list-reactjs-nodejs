const { loadAllTodos } = require("../data-access");

const getAllTodos = () => {
  return loadAllTodos();
};

module.exports = {
  getAllTodos,
};
