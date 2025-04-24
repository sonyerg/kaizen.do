import { Router } from "express";
import { createTask, getTasks } from "../controllers/task";

const router = Router();

router.get("/", getTasks);

router.post("/createTask", createTask);

export default router;
