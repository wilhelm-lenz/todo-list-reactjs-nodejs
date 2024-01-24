const { TodoService } = require("../services");
const { OK, INTERNAL_SERVER_ERROR } = require("./httpStatusCodes");

const patchToggleTodoController = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const newTodosArray = await TodoService.patchToggleTodoDone(todoId);
    res.status(OK).json({ success: true, articles: newTodosArray });
  } catch (err) {
    console.log(err);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ success: false, error: "Failed to add new todo" });
  }
};

module.exports = {
  patchToggleTodoController,
};
