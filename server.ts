import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { Express } from "express";
import router from "./configs/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use("/",router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
