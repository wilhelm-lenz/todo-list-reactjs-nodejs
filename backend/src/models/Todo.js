const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String },
    priotity: { type: String },
    dueDate: { type: Date },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    // userId: { type: mongoose.Types.ObjectId, require: true },
  },
  { collection: "todos", timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
