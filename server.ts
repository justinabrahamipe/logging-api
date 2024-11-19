import express from "express";
import dotenv from "dotenv";
import { Express } from "express";
import router from "./configs/routes";

dotenv.config();

const app: Express = express();
const port = 3000;

app.use("/",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
