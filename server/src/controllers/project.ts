import { RequestHandler } from "express";
import ProjectModel from "../models/project";

export const getProjects: RequestHandler = async (req, res, next) => {
  try {
    const projects = await ProjectModel.find();

    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

export const createProject: RequestHandler = async (req, res, next) => {
  const title = req.body.title;

  try {
    const project = await ProjectModel.create({
      title,
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};
