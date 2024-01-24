const { saveAllTodos } = require("../data-access");
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

    const todos = await TodoService.getAllTodos();
    const newTodosArray = [...todos, newTodo];

    await saveAllTodos(newTodosArray);

    res.status(OK).json({ success: true, articles: newTodosArray });

    return newTodosArray;
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
