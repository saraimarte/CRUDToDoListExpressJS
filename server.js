const express = require('express');

const app = express();

app.use(express.json());


let tasks = [
    {id: 1, task: 'clean room'},
    {id: 2, task: 'do homework'}
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/tasks/', (req, res) => {
    return res.status(200).json(tasks);
})

app.post('/api/tasks/', (req, res) => {

    console.log(req.body.task);
    
    const newTask = {
        id: tasks.length + 1,
        task: req.body.task,
    }

    tasks.push(newTask);

    return res.status(201).json(tasks); //201 means successful and something was created
})


app.delete('/api/tasks/:id/', (req, res) => {

    const id = parseInt(req.params.id);
    //const id = req.body.id;
    console.log(`ID: ${id}`);

    //only leave tasks that do not have this id 

    tasks =  tasks.filter((task) => task.id !== id);

    
    return res.status(200).json(tasks);
  
})



app.put('/api/tasks/:id/', (req, res) => {

    const id = parseInt(req.params.id);
    //const id = req.body.id;
    console.log(`ID: ${id}`);

    const editedTask = req.body.task;

    console.log(`editedTask: ${editedTask}`);

    const taskChosen =  tasks.find((task) => task.id === id);

    console.log(`taskChosen: ${taskChosen.task}`);

    taskChosen.task = editedTask;

    return res.status(200).json(tasks);
  
})

app.listen('3000', () => {
    console.log("Listening to Port 3000...");
})