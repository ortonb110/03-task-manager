

const getAllTasks = (req, res) => {
    res.send("Hello world");
}

const createTask = (req, res)=> {
    res.json(req.body);
}


const getSingleTask = (req, res)=> {
    res.json({id: req.params.id});
}


const updateTask = (req, res) => {
    res.send("Updating task");
}
const deleteTask = (req, res) => {
    res.send("Delete task");
}











module.exports = {getAllTasks, postTasks: createTask, getSingleTask, updateTask, deleteTask}