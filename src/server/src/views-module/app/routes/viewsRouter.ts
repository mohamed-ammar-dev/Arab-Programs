import express from "express";
import catchAsync from "../../../error-module/utils/catchAsync";
import { ViewsController } from "../controllers/viewsController";

const viewsRouter = express.Router();

viewsRouter.get("/", catchAsync(new ViewsController().renderHome));
viewsRouter.get("/coupon/:id", catchAsync(new ViewsController().renderCoupon));
viewsRouter.get("/blogs", catchAsync(new ViewsController().renderBlogs));
viewsRouter.get(
  "/blog/:id",
  catchAsync(new ViewsController().renderSpecificBlog)
);
viewsRouter.get("/aboutUs", catchAsync(new ViewsController().renderAboutUs));
viewsRouter.get(
  "/contactUs",
  catchAsync(new ViewsController().renderContactUs)
);
viewsRouter.get("/policy", catchAsync(new ViewsController().renderPolicy));

export { viewsRouter };
