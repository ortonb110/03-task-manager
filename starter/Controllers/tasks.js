

const getAllTasks = (req, res) => {
    res.send("Hello world");
}

const createTask = (req, res)=> {
    res.status(200).json({success: true, msg: "Posted"});
}


const getSingleTask = (req, res)=> {
    res.send("Getting single task");
}


const updateTask = (req, res) => {
    res.send("Updating task");
}
const deleteTask = (req, res) => {
    res.send("Updating task");
}










module.exports = {getAllTasks, postTasks: createTask, getSingleTask, updateTask, deleteTask}