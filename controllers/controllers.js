const Task = require("../config/model");

// Create and Save a new Task
exports.create = (req, res) => {
    if(!req.body.task){
        return res.status(400).send({
            message : "Task Can't be empty"
        });
    }
    const task = new Task({
        task : req.body.task
    });
    task.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Task."
        });
    });

};

// Retrieve and return all Task from the database.
exports.findAll = (req, res) => {
    Task.find()
    .then(task => {
        res.send(task);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tasks."
        });
    });

};

// // Update a Task identified by the TaskId in the request
// exports.update = (req, res) => {

// };

// // Delete a Task with the specified TaskId in the request
// exports.delete = (req, res) => {

// };