const { TodoDAO } = require("../../data-access");

exports.postAddTodo = async (newTodo) => {
  const todo = await TodoDAO.insertOne(newTodo);
  return todo;
};
