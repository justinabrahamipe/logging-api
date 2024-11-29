import { Router, Request, Response } from "express";
import { getUsers } from "../src/getActivitiesList";
import {createNewLogEntry } from "../src/createNewLogEntry";


const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

router.get("/activities", (req: Request, res: Response) => {
  getUsers(process.env.NOTION_TOKEN || "", process.env.ACTIVITES_DB || "").then(
    (data) => {
      res.send(data?.results);
    }
  );
});

router.get("/createNewLogEntry", (req: Request, res: Response) => {
  createNewLogEntry(process.env.NOTION_TOKEN || "", process.env.ACTIVITES_DB || "").then(
    (data) => {
      res.send("success");
    }
  );
});
router.get("/users/:userId", (req: Request, res: Response) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

export default router;
