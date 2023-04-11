const mongoose = require("mongoose");

//Defining Schema
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide a name"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default:false
  },
});

module.exports = mongoose.model("Task", TaskSchema);
