import mongoose from "mongoose";

const UserListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Cannot be less than 3 characters'],
        maxlength: 40,
    },
    email: {
        type: String,
        required: true,
        minlength: [3, 'Cannot be less than 3 characters'],
        maxlength: 40,
    },
    password: {
        type: String,
        required: true,
        minlength: [3, 'Cannot be less than 3 characters'],
        maxlength: 40,
    },
})

const UserList = mongoose.model('User', UserListSchema) // converts to table - tasks 
export default UserList
