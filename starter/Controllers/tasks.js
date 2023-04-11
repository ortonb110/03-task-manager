const Task = require("../Models/Task");

const getAllTasks = async (req, res) => {
  try {
    const getAllTasks = await Task.find({});
    res.status(201).json({getAllTasks});
  } catch (error) {
    res.status(500).json({"msg": "Task is empty"});
  }
};

const createTask = async (req, res) => {
 try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
 } catch (error) {
    res.status(500).json({"msg": "There was a server error"});
 }
};

const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Updating task");
};
const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  postTasks: createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
