import { Container } from "inversify";
import { BlogsRepo } from "../blogs-module/adapters/database/repository/blogsRepo";
import { BlogsCoreService } from "../blogs-module/domain/core/blogsCoreService";
import { IBlogsRepo } from "../blogs-module/domain/ports/IBlogsRepo";
import { IBlogsCoreService } from "../blogs-module/interfaces/IBlogsCoreService";
import { CouponsRepo } from "../coupons-module/adapters/database/repository/couponsRepo";
import { CouponsCoreService } from "../coupons-module/domain/core/couponsCoreService";
import { ICouponsRepo } from "../coupons-module/domain/ports/ICouponsRepo";
import { ICouponsCoreService } from "../coupons-module/interfaces/ICouponsCoreService";
import { DI_TYPES } from "../shared/types/di";

const diContainer = new Container();

diContainer
  .bind<ICouponsCoreService>(DI_TYPES.CouponsCoreService)
  .to(CouponsCoreService);
diContainer
  .bind<IBlogsCoreService>(DI_TYPES.BlogsCoreService)
  .to(BlogsCoreService);

diContainer
  .bind<ICouponsRepo>(DI_TYPES.CouponsRepo)
  .to(CouponsRepo)
  .inSingletonScope();
diContainer
  .bind<IBlogsRepo>(DI_TYPES.BlogsRepo)
  .to(BlogsRepo)
  .inSingletonScope();

export { diContainer };
