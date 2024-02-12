const mongoose = require("mongoose");
const Todo = require("../models/Todo.js");

exports.findAll = async () => {
  const foundedTodos = await Todo.find();
  return foundedTodos;
};

exports.findOne = async (todoId) => {
  const foundedOneTodo = await Todo.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(todoId),
  });
  return foundedOneTodo;
};

exports.insertOne = async (newTodo) => {
  const insertedTodo = await Todo.create(newTodo);
  return insertedTodo;
};

exports.updateOne = async (todoId, updateTodoStatus) => {
  const updatedTodo = await Todo.findOneAndUpdate(
    {
      _id: mongoose.Types.ObjectId.createFromHexString(todoId),
    },
    { status: updateTodoStatus.status },
    { new: true }
  );
  return updatedTodo;
};

exports.deleteOne = async (todoId) => {
  const foundedOneTodo = await Todo.findOneAndDelete({
    _id: mongoose.Types.ObjectId.createFromHexString(todoId),
  });
  return foundedOneTodo;
};
