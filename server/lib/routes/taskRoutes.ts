import { Request, Response } from "express";
import * as express from "express";

import { TaskQuery } from "../models/taskSchema";
import { TaskController } from "../controllers/taskController";

export class Routes {
  private taskController: TaskController = new TaskController();
  public routes(app: express.Application): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "Get request successful"
      });
    });
    app
      .route("/task")
      .get(this.taskController.getTasks)
      .post(this.taskController.createTask);
    app.route("/task/:taskID").get(this.taskController.getTaskWithID);
  }
}
