import express from "express";
import { validate } from "../../../shared/middleware/validate";
import catchAsync from "../../../error-module/utils/catchAsync";
import { BlogsController } from "../controllers/blogsController";
import joiCatchAsync from "../../../error-module/utils/joiCatchAsync";
import { getBlogSchema } from "../schemas/getBlogSchema";

const blogsRouter = express.Router();

blogsRouter.get("/getAll", catchAsync(new BlogsController().getAll));

blogsRouter.get(
  "/getBlog",
  joiCatchAsync(validate(getBlogSchema)),
  catchAsync(new BlogsController().getBlog)
);

export { blogsRouter };
