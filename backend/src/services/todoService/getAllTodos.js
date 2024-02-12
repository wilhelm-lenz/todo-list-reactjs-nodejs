const { TodoDAO } = require("../../data-access");

exports.getAllTodos = async () => {
  const allTodos = await TodoDAO.findAll();
  return allTodos;
};
