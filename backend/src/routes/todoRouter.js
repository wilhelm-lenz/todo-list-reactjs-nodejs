const express = require("express");
const { TodosController } = require("../controllers");

const router = express.Router();

router
  .route("/")
  .get(TodosController.getAllTodosCtrl)
  .post(TodosController.postAddTodoCtrl);

router
  .route("/:todoId")
  .get(TodosController.getOneTodoCtrl)
  .delete(TodosController.deleteTodoCtrl);

router.route("/toggleDone/:todoId").patch(TodosController.patchToggleTodoCtrl);

module.exports = router;
