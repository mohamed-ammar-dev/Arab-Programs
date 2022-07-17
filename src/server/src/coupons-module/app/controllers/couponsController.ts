import { Request, Response } from "express";
import { diContainer } from "../../../config/inversify.config";
import { DI_TYPES } from "../../../shared/types/di";
import { sendResponse } from "../../../shared/utils/sendResponse";
import { ICouponsCoreService } from "../../interfaces/ICouponsCoreService";

export class CouponsController {
  async getAll(request: Request, response: Response) {
    const couponsCoreService = diContainer.get<ICouponsCoreService>(
      DI_TYPES.CouponsCoreService
    );

    const coupons = await couponsCoreService.getAll();

    sendResponse(response, coupons);
  }

  async getCoupon(request: Request, response: Response) {
    const couponsCoreService = diContainer.get<ICouponsCoreService>(
      DI_TYPES.CouponsCoreService
    );

    const coupon = await couponsCoreService.getCoupon(request.body);

    sendResponse(response, coupon);
  }
}
