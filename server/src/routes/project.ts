import { Router } from "express";
import { createProject, getProjects } from "../controllers/project";

const router = Router();

router.get("/", getProjects);

router.post("/createProject", createProject);

export default router;
