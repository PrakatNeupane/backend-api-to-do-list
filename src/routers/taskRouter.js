import express from 'express'
const router = express.Router()
import { getTasks, insertTask, deleteTask } from '../models/task/TaskList.model.js';



// task Api end points
router.get("/", async (req, res) => {
    // replace the faketasks with the real ones from database
    const result = await getTasks() // you can await in TaskList.model but instead we do where we need the function
    res.json({
        status: "success",
        message: "you made a get call",
        result: result
    }); // this res.json will be passed to rest.http
});
router.post("/", async (req, res) => {


    try {
        const result = await insertTask(req.body);
        console.log(result)

        res.json({
            status: 'success',
            message: "Successful, your task has been added",
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message,
        })
    }
});
router.delete("/:_id", async (req, res) => {

    try {
        // we need an _id to select which taskk to delete
        const { _id } = req.params;
        console.log(_id)
        const result = await deleteTask(_id)

        if (result?._id) {
            return res.json({
                status: "Success",
                message: "the task has been deleted",
                result,
            });
        }

        res.json({
            status: "success",
            message: "There is nothing to delete",
        })

    } catch (error) {
        res.json({
            staus: 'error',
            message: error.message,
        })
    }

});


export default router;