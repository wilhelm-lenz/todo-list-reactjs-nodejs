const { TodoService } = require("../services");
const { OK, INTERNAL_SERVER_ERROR } = require("./httpStatusCodes");

const deleteTodoController = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const newTodosArray = await TodoService.deleteTodo(todoId);
    res.status(OK).json({ success: true, articles: newTodosArray });
  } catch (err) {
    console.log(err);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ success: false, error: "Faild to delete todo" });
  }
};

module.exports = {
  deleteTodoController,
};
