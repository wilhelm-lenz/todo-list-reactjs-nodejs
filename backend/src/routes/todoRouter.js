const express = require("express");

const todoRouter = express.Router();

todoRouter.get("/", Todos);
