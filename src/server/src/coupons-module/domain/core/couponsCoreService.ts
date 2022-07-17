import { DI_TYPES } from "../../../shared/types/di";
import { ICouponsCoreService } from "../../interfaces/ICouponsCoreService";
import { ICouponsRepo } from "../ports/ICouponsRepo";
import "reflect-metadata";
import { inject, injectable } from "inversify";

@injectable()
export class CouponsCoreService implements ICouponsCoreService {
  constructor(
    @inject(DI_TYPES.CouponsRepo)
    private couponsRepo: ICouponsRepo
  ) {}

  async getAll() {
    return await this.couponsRepo.getAll();
  }

  async getCoupon(params: any) {
    const couponId = params.couponId;

    const coupon = await this.couponsRepo.getCoupon(couponId);

    const date = coupon.createdAt;
    coupon.createdAt =
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    return coupon;
  }
}
