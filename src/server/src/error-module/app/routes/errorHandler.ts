import { Request, Response, NextFunction } from "express";
import { server } from "../../../config/server";
import globalErrorHandler from "../controllers/errorController";

server.app.all("*", (_: Request, response: Response, _2: NextFunction) => {
  return response.render("404.ejs");
});

server.app.use(globalErrorHandler);
