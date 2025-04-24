import { RequestHandler } from "express";
import TaskModel from "../models/task";

export const getTasks: RequestHandler = async (req, res, next) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const createTask: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;

  try {
    const task = await TaskModel.create({
      title,
      description,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};
