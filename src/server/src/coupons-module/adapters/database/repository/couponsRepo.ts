import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { injectable } from "inversify";
import { CouponsModel } from "../../../database/models/coupons";
import { ICouponsRepo } from "../../../domain/ports/ICouponsRepo";

@injectable()
export class CouponsRepo extends BaseRepo implements ICouponsRepo {
  constructor() {
    super(CouponsModel);
  }

  async getAll() {
    return await this.find({
      attributes: ["id", "title", "miniDescription", "picture"],
    });
  }

  async getCoupon(couponId: number) {
    return await this.findOne({ condition: { id: couponId } });
  }
}
