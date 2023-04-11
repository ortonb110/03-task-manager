const Task = require("../Models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(201).json({tasks});
  } catch (error) {
    res.status(500).json({"msg": "Task is empty"});
  }
};

const createTask = async (req, res) => {
 try {
    const tasks = await Task.create(req.body);
    res.status(201).json({ tasks });
 } catch (error) {
    res.status(500).json({"msg": "There was a server error"});
 }
};

const getSingleTask = async (req, res) => {
  const {id:taskID} = req.params;
  try {
    const singleTask = await Task.findById(taskID);
    if(singleTask === null) {
      return res.status(404).json({msg: "Invalid ID"});
    } else {
      res.status(200).json({
        singleTask
      })
    }
    
  } catch (error) {
    res.status(500).json({msg: `There's no task with the id: ${taskID}`});
  }
};


const deleteTask = async (req, res) => {
  try {
    const {id:taskID} = req.params;
    const deleteTask = await Task.findOneAndDelete({_id:taskID});
    if(!deleteTask) {
      return res.status(404).json({msg: "Task does not exist"})
    } else {
      res.status(200).json({msg: `Task with ID: ${taskID} deleted!` });
    }
  } catch (error) {
    res.status(500).json({msg: `Task does not exist`});
  }
};

const updateTask = async (req, res) => {
  try {
    const {id:taskID} = req.params;
    const task =  await Task.findOneAndUpdate({_id:taskID}, req.body, {
      new:true,
      runValidators: true
    })
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: `Task does not exist`});
  }
};

module.exports = {
  getAllTasks,
  postTasks: createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
