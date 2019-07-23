"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const taskSchema_1 = require("../models/taskSchema");
const Task = mongoose.model("Task", taskSchema_1.TaskSchema);
class TaskController {
    createTask(req, res) {
        let newTask = new Task(req.body);
        newTask.save((err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
    getTasks(req, res) {
        Task.find({}, (err, task) => {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }
}
exports.TaskController = TaskController;
//# sourceMappingURL=taskController.js.map