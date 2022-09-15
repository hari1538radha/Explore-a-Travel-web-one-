import express from "express";
import mongoose from "mongoose";
import { Port } from "./Const.js";
import routes from "./Routes/Routes.js";
import { mongoUrl } from "./Const.js";
import bodyParser from "body-parser";
import cors from "cors"


const app = express();
app.use(cors());


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/authenticate", routes);

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Database Connection successfully!!!"))
  .catch((err) => console.log("Database Connection Failed!!!", err.message));

app.listen(Port, () => {
  console.log(`Server listening at ${Port}`);
});