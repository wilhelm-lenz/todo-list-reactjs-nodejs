const { TodoDAO } = require("../../data-access");

const todoShowDetails = (newTodo) => {
  const newTodoObj = {
    _id: newTodo._id,
    title: newTodo.title,
    status: "open",
    dueDate: new Date(Date.now()),
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now()),
  };
  return newTodoObj;
};

exports.postAddTodo = async (newTodoInfo) => {
  const todo = todoShowDetails(newTodoInfo);
  const newTodo = await TodoDAO.insertOne(todo);
  return newTodo;
};
