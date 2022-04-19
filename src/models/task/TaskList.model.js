// this file is to have query on tasklist schema 
import TaskListSchema from './TaskList.schema.js'

// insert a task 
export const insertTask = (obj) => { // will import in taskrouter
    return TaskListSchema(obj).save()
}


// read all task 
export const getTasks = () => {
    return TaskListSchema.find()
}

// delete a task 
export const deleteTask = _id => {
    return TaskListSchema.findByIdAndDelete(_id)
    // TaskListSchema.findOneAndRemove({_id})
}

