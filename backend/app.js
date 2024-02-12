const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { todoRouter, userRouter } = require("./src/routes/index");

const app = express();

app.use(cors()); // Cors Policy

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static("./public"));

app.use(express.json());

app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

app.use((_, res) => {
  res.status(404).json({ status: "fail", error: "Route not found" });
});

module.exports = app;
