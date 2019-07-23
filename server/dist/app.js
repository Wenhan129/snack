"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const taskRoutes_1 = require("./routes/taskRoutes");
dotenv.config();
class App {
    constructor() {
        this.routePrv = new taskRoutes_1.Routes();
        this.db_user = process.env.db_user;
        this.db_passwd = process.env.db_passwd;
        this.mongoUrl = `mongodb://${this.db_user}:${this.db_passwd}@ds036079.mlab.com:36079/arsenal`;
        this.app = express();
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        console.log(`user:${this.db_user} password:${this.db_passwd}`);
        console.log(this.mongoUrl);
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map