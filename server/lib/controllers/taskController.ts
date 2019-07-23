import * as mongoose from "mongoose";
import * as express from "express";

import { TaskSchema, TaskQuery } from "../models/taskSchema";
import { Request, Response } from "express";

const Task = mongoose.model("Task", TaskSchema);

export class TaskController {
  public createTask(req: Request, res: Response) {
    let newTask = new Task(req.body);

    newTask.save((err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
  public getTasks(req: Request, res: Response) {
    Task.find({}, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
  public getTaskWithID(req: Request, res: Response) {
    Task.findById(req.params.taskID, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
}
