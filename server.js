// const express = require("express");
import express from "express";
import 'dotenv/config'
const app = express();
const PORT = 8000;

// connect to mongoDB
import mongoClient from './src/config/db.js';
mongoClient();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())//these two lines to receive data from the form as json data

// load modules
import taskRouter from './src/routers/taskRouter.js'
import userRouter from './src/routers/userRouter.js'

app.use('/api/v1/task', taskRouter)
app.use('/api/v1/user', userRouter)



app.use("/", (req, res) => {
	res.json({ message: "You have reached to the api of not to do application" });
});

app.listen(PORT, error => { // this will open app at 8000
	error
		? console.log(error)
		: console.log(`Server is running  http://localhost:${PORT}`);
});
