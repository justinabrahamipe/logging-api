import { Router, Request, Response } from "express";
import { getActivities } from "../src/getActivitiesList";
import { getGoalsList } from "../src/getGoalsList";
import { createNewLogEntry } from "../src/createNewLogEntry";
import { getLog } from "../src/getLog";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

router.get("/activities", (req: Request, res: Response) => {
  getActivities(
    process.env.NOTION_TOKEN || "",
    process.env.ACTIVITES_DB || ""
  ).then((data) => {
    res.send(data);
  });
});

router.get("/log", (req: Request, res: Response) => {
  getLog(process.env.NOTION_TOKEN || "", process.env.LOG_DB || "", "", "").then(
    (data) => {
      res.send(data);
    }
  );
});

router.get("/goals", (req: Request, res: Response) => {
  getGoalsList(process.env.NOTION_TOKEN || "", process.env.GOALS_DB || "").then(
    (data) => {
      res.send(data?.results);
    }
  );
});

router.get("/createNewLogEntry", (req: Request, res: Response) => {
  createNewLogEntry(
    process.env.NOTION_TOKEN || "",
    process.env.ACTIVITES_DB || ""
  ).then((data) => {
    res.send("success");
  });
});
router.get("/users/:userId", (req: Request, res: Response) => {
  const userId = req.params.userId;
  res.send(`User ID: ${userId}`);
});

export default router;
