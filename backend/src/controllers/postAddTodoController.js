const {
  createdDateForCreatedAT,
} = require("../helpers/createdDateForCreatedAt");
const { TodoService } = require("../services");
const { OK, INTERNAL_SERVER_ERROR } = require("./httpStatusCodes");

const postAddTodoController = async (req, res) => {
  try {
    const newTodoTask = req.body.task;
    const newTodo = {
      id: Date.now(),
      task: newTodoTask,
      done: false,
    };

    createdDateForCreatedAT(newTodo);

    const newTodosArray = await TodoService.addTodo(newTodo);

    res.status(OK).json({ success: true, articles: newTodosArray });
  } catch (err) {
    console.log(err);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ success: false, error: "Faild to load todos" });
  }
};

module.exports = {
  postAddTodoController,
};
