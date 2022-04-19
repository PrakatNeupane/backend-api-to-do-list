// this file is to have query on tasklist schema 
import UserListSchema from './UserList.schema.js'

// insert a user 
export const insertUser = (obj) => { // will import in taskrouter
    return UserListSchema(obj).save()
}

// read all users 
export const getUsers = () => {
    return UserListSchema.find()
}

// read a single user
export const getSingleUser = _id => {
    return UserListSchema.findById({ _id })
}

// delete a user 
export const deleteUser = _id => {
    return UserListSchema.findByIdAndDelete({ _id })
    // TaskListSchema.findOneAndRemove({_id})
}

// update a user password
export const updateUserPass = ({ _id, newPassword }) => {
    return UserListSchema.findByIdAndUpdate(_id, {
        password: newPassword,
    },
        {
            new: true,
        })
}

