const { TodoService } = require("../services");
const { OK, INTERNAL_SERVER_ERROR } = require("../data-access/httpStatusCodes");
// const {
//   createdDateForCreatedAT,
// } = require("../helpers/createdDateForCreatedAt");

exports.getAllTodosCtrl = async (_, res) => {
  try {
    const todos = await TodoService.getAllTodos();
    res.status(OK).json({ status: "success", data: { todos } });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive todos",
    });
  }
};

exports.getOneTodoCtrl = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const todo = await TodoService.getOneTodo(todoId);
    res.status(OK).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive todo",
    });
  }
};

exports.postAddTodoCtrl = async (req, res) => {
  try {
    const newTodo = await TodoService.postAddTodo(req.body);
    res.status(OK).json({
      status: "success",
      data: {
        todo: newTodo,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create todo",
    });
  }
};

exports.patchToggleTodoCtrl = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const updateStatus = req.body;
    const updatedTodo = await TodoService.patchToggleTodoDone(
      todoId,
      updateStatus
    );
    res.status(OK).json({ status: "success", data: { todo: updatedTodo } });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not update todo",
    });
  }
};

exports.deleteTodoCtrl = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const deletedTodo = await TodoService.deleteOneTodo(todoId);
    res.status(OK).json({ status: "success", data: { todo: deletedTodo } });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not delete todo",
    });
  }
};
