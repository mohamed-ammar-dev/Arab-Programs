import { IBaseRepo } from "../../../shared/interfaces/IBaseRepo";

export interface ICouponsRepo extends IBaseRepo {
  getAll(): any;
  getCoupon(couponId: number): any;
}
