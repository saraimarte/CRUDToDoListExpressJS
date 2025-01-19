// Use Express Router
const express = require('express');
const taskRouter = express.Router();

//Middleware //This is needed so that ExpressJS can actually read the JSON in the body sent from the client like so (req.body.task)
// By default http cannot send objects so we make it a string on the client and then we 'unstring' it using this middleware that simply turns the string into a JSON object. 
taskRouter.use(express.json());

// Importing controllers - controllers are just functions that control what happens when the client wants to go to a certain page/path.
const {getTasks, addTask, deleteTask, updateTask} = require('../Controllers/controllers');

//Routes 

//Get all tasks 
taskRouter.get('/', getTasks);

//Add a task
taskRouter.post('/', addTask );

//Delete a task //the slash at the start is needed. If not then this controller doesn't work.
taskRouter.delete('/:id', deleteTask);

//Update a task 
taskRouter.put('/:id', updateTask);

module.exports = taskRouter;