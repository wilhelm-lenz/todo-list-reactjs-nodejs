const { TodoService } = require("../services");
const { OK, INTERNAL_SERVER_ERROR } = require("./httpStatusCodes");

const getTodosController = (_, res) => {
  TodoService.getAllTodos()
    .then((todos) => res.status(OK).json({ success: true, articles: todos }))
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Faild to load todos Server Error" });
    });
};

module.exports = {
  getTodosController,
};
