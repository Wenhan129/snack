"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskController_1 = require("../controllers/taskController");
class Routes {
    constructor() {
        this.taskController = new taskController_1.TaskController();
    }
    routes(app) {
        app.route("/").get((req, res) => {
            res.status(200).send({
                message: "Get request successful"
            });
        });
        app
            .route("/task")
            .get(this.taskController.getTasks)
            .post(this.taskController.createTask);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=taskRoutes.js.map