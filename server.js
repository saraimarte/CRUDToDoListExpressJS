//Initialize express app - creates an http server by default 
const express = require('express');
const app = express();

//Middleware //This is needed so that ExpressJS can actually read the JSON in the body sent from the client like so (req.body.task)
// By default http cannot send objects so we make it a string on the client and then we 'unstring' it using this middleware that simply turns the string into a JSON object. 
app.use(express.json());

// Importing controllers - controllers are just functions that control what happens when the client wants to go to a certain page/path.
const {getTasks, addTask, deleteTask, updateTask} = require('./Controllers/controllers');

//Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); //__direname only works like this if using the commonJS mode of importing modules instead of the other way which is the ES6 modules.
})

//Get all tasks 
app.get('/api/tasks/', getTasks);

//Add a task
app.post('/api/tasks/', addTask );

//Delete a task
app.delete('/api/tasks/:id/', deleteTask);

//Update a task 
app.put('/api/tasks/:id/', updateTask);

app.listen('3000', () => {
    console.log("Listening to Port 3000...");
})