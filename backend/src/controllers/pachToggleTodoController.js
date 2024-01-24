const { TodoService } = require("../services");
const { OK, INTERNAL_SERVER_ERROR } = require("./httpStatusCodes");

const patchToggleTodoController = (req, res) => {
  const todoId = req.params.todoId;
  TodoService.patchToggleTodoDone(todoId)
    .then((newTodosArray) => {
      // console.log(newTodosArray);
      res.status(OK).json({ success: true, articles: newTodosArray });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Failed to add new todo" });
    });
};

module.exports = {
  patchToggleTodoController,
};
