module.exports = (app) => {
    const Task = require('../controllers/controllers');

    // Create a new Task
    app.post('/task', Task.create);

    // Retrieve all Task
    app.get('/task', Task.findAll);

    // Retrieve a single Task with TaskId
    app.get('/Task/:_id', Task.findOne);

    //  Update a Task with TaskId
    app.put('/Task/:_id', Task.update);

    // Delete a Task with TaskId
    app.delete('/Task/:_id', Task.delete);
}