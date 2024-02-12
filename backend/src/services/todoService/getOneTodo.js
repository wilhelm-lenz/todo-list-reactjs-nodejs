const { TodoDAO } = require("../../data-access");

exports.getOneTodo = async (todoId) => {
  const todo = await TodoDAO.findOne(todoId);
  return todo;
};
