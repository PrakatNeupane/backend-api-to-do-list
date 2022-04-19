import express from 'express'
const router = express.Router()
import { getUsers, insertUser, deleteUser, getSingleUser, updateUserPass } from '../usermodel/UserList.model.js';



// // task Api end points
// router.get("/", async (req, res) => {
//     // replace the faketasks with the real ones from database
//     const result = await getUsers() // you can await in TaskList.model but instead we do where we need the function
//     res.json({
//         status: "success",
//         message: "you made a get call",
//         result: result
//     }); // this res.json will be passed to rest.http
// });
router.get("/:_id?", async (req, res) => { // the question mark sign is a condition
    try {
        const { _id } = req.params;
        const result = _id ? await getSingleUser(_id) : await getUsers() // can use both the cases depending if the id is passed or not
        console.log(_id)
        return res.json({
            status: "success",
            message: "user-info-displayed",
            result,
        })
    } catch (error) {
        res.json({
            staus: 'error',
            message: error.message,
        })
    }
});

router.post("/", async (req, res) => {


    try {
        const result = await insertUser(req.body);
        console.log(result)

        res.json({
            status: 'success',
            message: "Successful, user has been added",
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message,
        })
    }
});



// update
router.patch("/", async (req, res) => {
    console.log(req.body)
    const result = await updateUserPass(req.body)
    res.json({ status: "success", result })
});

router.delete("/:_id", async (req, res) => {

    try {
        // we need an _id to select which taskk to delete
        const { _id } = req.params;
        console.log(_id)
        const result = await deleteUser(_id)

        if (result?._id) {
            return res.json({
                status: "Success",
                message: "the user has been deleted",
                result,
            });
        }

        res.json({
            status: "success",
            message: "No user found to delete",
        })

    } catch (error) {
        res.json({
            staus: 'error',
            message: error.message,
        })
    }

});


export default router;