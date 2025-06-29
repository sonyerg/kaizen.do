import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";

import taskRoute from "./routes/task";
import projectRoute from "./routes/project";

const app = express();

app.use(express.json());
app.use("/api/tasks", taskRoute);
app.use("/api/projects", projectRoute);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occured";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  };

  res.status(statusCode).json({ error: errorMessage });
});

export default app;
