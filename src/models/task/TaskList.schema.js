import mongoose from "mongoose";

const TaskListSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    task: {
        type: String,
        required: true,
        default: '',
        minLength: [3, 'Can not be less than 3 characters !!'],
        max: 30,
    },
    hr: {
        type: Number,
        required: true,
    },
})

const TaskList = mongoose.model('Task', TaskListSchema) // converts to table - tasks 
export default TaskList
