import express from "express";
import { validate } from "../../../shared/middleware/validate";
import catchAsync from "../../../error-module/utils/catchAsync";
import { CouponsController } from "../controllers/couponsController";
import joiCatchAsync from "../../../error-module/utils/joiCatchAsync";
import { getCouponSchema } from "../schemas/getCouponSchema";

const couponsRouter = express.Router();

couponsRouter.get("/getAll", catchAsync(new CouponsController().getAll));

couponsRouter.get(
  "/getCoupon",
  joiCatchAsync(validate(getCouponSchema)),
  catchAsync(new CouponsController().getCoupon)
);

export { couponsRouter };
