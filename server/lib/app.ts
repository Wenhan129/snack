import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Routes } from "./routes/taskRoutes";

dotenv.config();

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  private db_user = process.env.db_user;
  private db_passwd = process.env.db_passwd;
  private mongoUrl: string = `mongodb://${this.db_user}:${
    this.db_passwd
  }@ds036079.mlab.com:36079/arsenal`;

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.routePrv.routes(this.app);
  }

  config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  mongoSetup(): void {
    console.log(`user:${this.db_user} password:${this.db_passwd}`);
    console.log(this.mongoUrl);
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
  }
}

export default new App().app;
