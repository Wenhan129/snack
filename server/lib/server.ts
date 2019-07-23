import app from "./app";
import { config } from "dotenv";

config();

app.listen(process.env.PORT, () => {
  console.log("Express server listening on port " + process.env.PORT);
});
