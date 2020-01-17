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
        })
        .catch(err => {
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
        console.log(req.body)   
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tasks."
        });
    });
};

// Find a single task with a Id
exports.findOne = (req, res) => {
    Task.findById(req.params._id)
    .then(task => {
        if(!task) {
            return res.status(404).send({
                message: "Task not found with id " + req.params._id
            });            
        }
        res.send(task);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving task with id " + req.params_id
        });
    });
};

// Update a Task identified by the TaskId in the request
exports.update = (req, res) => {
      // Validate Request
      if(!req.body.task) {
        return res.status(400).send({
            message: "Task can not be empty"
        });
    }

    // Find note and update it with the request body
    Task.findByIdAndUpdate(req.params._id, {
        task: req.body.task
    }, {new: true})
    .then(task => {
        if(!task) {
            return res.status(404).send({
                message: "Task not found with id " + req.params._id
            });
        }
        res.send(task);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Task not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Error updating task with id " + req.params._id
        });
    });
};

// Delete a Task with the specified TaskId in the request
exports.delete = (req, res) => {
    Task.findByIdAndRemove(req.params._id)
    .then(task => {
        if(!task) {
            return res.status(404).send({
                message: "Task not found with id " + req.params._id
            });
        }
        res.send({message: "Task deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Task not found with id " + req.params._id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Task with id " + req.params.noteId
        });
    });

};