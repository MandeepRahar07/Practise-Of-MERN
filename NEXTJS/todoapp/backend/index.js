
const express = require('express');
require('dotenv').config();
const db = require('./config/db'); // Import db from db.js


const PORT = process.env.PORT;

const app = express();


app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true }));



// Route to fetch data from the database
app.get('/', (req, res) => {
    db.query('SELECT * FROM todos', (err, results) => {
        if (err) {
            console.log('Error fetching data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.status(200).json(results);
    });
});

// Additional route to run another MySQL query
app.post('/',(req,res)=>{
       const{task} = req.body;

       if(!task){
        return res.status(400).json({error : "Task is required"});
       }

       const todo = {
        task : task
       };

       db.query('INSERT INTO todos SET ?', todo,(error, result)=>{
        if(error){
           console.error("Error adding todo:", error);
           return res.status(500).json({error: "Internal server Error"})
        }
        console.log("todo addded successfully:", result);
        res.status(201).json({message: "Todo added successfully", id: result.insertId});
       })
})

app.delete("/:id", (req,res)=>{
    const { id } = req.params;

    try {
        const result =  db.query('DELETE FROM todos WHERE id = ?', id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.patch('/:id', (req,res)=>{
    const {id} = req.params;
    const {task, completed} = req.body;

    if(!task && completed === undefined){
        return res.status(400).json({error: 'Task or completed status is required '})
    }

    try{
        const todo = {};
        if(task){
            todo.task = task;
        }
        if(completed !== undefined){
            todo.completed = completed
        }
        const result = db.query("UPDATE todos SET ? WHERE id = ?", [todo, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        res.status(200).json({ message: 'Todo updated successfully' });
    }
    catch(error){
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})


app.listen(PORT, () => {
    db.connect((err) => {
        if (err) {
            console.log('Error connecting to DB:', err);
            return;
        }
        console.log('Connected to DB!');
    });
    console.log(`Server is running at http://localhost:${PORT}`);
});
