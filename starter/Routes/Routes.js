const express = require("express");
const Router = express.Router();
const {
  getAllTasks,
  postTasks: createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../Controllers/tasks");

Router.get("/", getAllTasks);
Router.post("/", createTask);
Router.get("/:id", getSingleTask);
Router.patch("/:id", updateTask);
Router.delete("/:id", deleteTask);

module.exports = Router;
