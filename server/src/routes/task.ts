import { Router } from "express";
import { createTask, getTask, getTasks } from "../controllers/task";

const router = Router();

router.get("/:columnId", getTasks);

router.get("/task/:taskId", getTask);

router.post("/createTask", createTask);

export default router;
