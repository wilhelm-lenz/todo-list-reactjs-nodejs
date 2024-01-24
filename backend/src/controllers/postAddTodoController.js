const { saveAllTodos } = require("../data-access");
const { TodoService } = require("../services");
const { OK, INTERNAL_SERVER_ERROR } = require("./httpStatusCodes");

const postAddTodoController = (req, res) => {
  const date = new Date(Date.now());
  const day = date.getDate();
  // const weekday = date.toLocaleString("default", { weekday: "long" });
  // const monthNameShort = date.toLocaleString("default", { month: "short" });
  const monthNumber = date.getMonth();
  const fullYear = date.getFullYear();
  // body wurde auf Zeile 15 geparses zu einem JavaScript Object
  const newTodoTask = req.body.task;
  const newTodo = {
    id: Date.now(),
    task: newTodoTask,
    done: false,
  };
  if (!newTodo.created_at) {
    newTodo.created_at = `${fullYear}-${monthNumber < 10 ? 0 : null}${
      monthNumber + 1
    }-${day}`;
  }

  TodoService.getAllTodos()
    .then((todos) => [...todos, newTodo])
    .then((newTodosArray) => saveAllTodos(newTodosArray))
    .then((newTodosArray) =>
      res.status(OK).json({ success: true, articles: newTodosArray })
    )
    .catch((err) => {
      console.log(err);
      res
        .status(INTERNAL_SERVER_ERROR)
        .json({ success: false, error: "Faild to load todos" });
    });
};

module.exports = {
  postAddTodoController,
};
