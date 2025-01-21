//Initialize express app - creates an http server by default 
const express = require('express');
const app = express();

//Import the router
const taskRouter = require('./Routes/tasks');

//Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); //__direname only works like this if using the commonJS mode of importing modules instead of the other way which is the ES6 modules.
})

//Create a router for every endpoint (path/page) related to tasks 
app.use('/api/tasks', taskRouter);
// "the taskRouter is what will make sure that 
// every one that goes to an endpoint that starts with '/api/tasks' get's to their destination"






app.listen('3000', () => {
    console.log("Listening to Port 3000...");
})