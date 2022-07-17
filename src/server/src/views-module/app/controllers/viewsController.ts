import { Request, Response } from "express";
import { IBlogsCoreService } from "../../../blogs-module/interfaces/IBlogsCoreService";
import { diContainer } from "../../../config/inversify.config";
import { ICouponsCoreService } from "../../../coupons-module/interfaces/ICouponsCoreService";
import { DI_TYPES } from "../../../shared/types/di";

export class ViewsController {
  async renderHome(request: Request, response: Response) {
    const couponsCoreService = diContainer.get<ICouponsCoreService>(
      DI_TYPES.CouponsCoreService
    );

    const coupons = await couponsCoreService.getAll();

    const lastCoupons = coupons.slice(0, 3);

    response.render("home.ejs", { coupons, lastCoupons });
  }

  async renderCoupon(request: Request, response: Response) {
    const couponsCoreService = diContainer.get<ICouponsCoreService>(
      DI_TYPES.CouponsCoreService
    );

    const coupon = await couponsCoreService.getCoupon({
      couponId: request.params.id,
    });

    response.render("coupon.ejs", { coupon });
  }

  async renderBlogs(request: Request, response: Response) {
    const page =
      !request.query?.page || +request.query?.page! < 0
        ? 0
        : +request.query.page;

    const blogsCoreService = diContainer.get<IBlogsCoreService>(
      DI_TYPES.BlogsCoreService
    );

    const { blogs, pages } = await blogsCoreService.getAll(page);

    response.render("blogs.ejs", {
      blogs: blogs.rows,
      active: page + 1,
      pages,
    });
  }

  async renderSpecificBlog(request: Request, response: Response) {
    const blogsCoreService = diContainer.get<IBlogsCoreService>(
      DI_TYPES.BlogsCoreService
    );

    const blog = await blogsCoreService.getBlog(request.params.id);

    response.render("specificBlog.ejs", { blog });
  }

  async renderAboutUs(request: Request, response: Response) {
    response.render("aboutUs.ejs");
  }

  async renderContactUs(request: Request, response: Response) {
    response.render("contactUs.ejs");
  }

  async renderPolicy(request: Request, response: Response) {
    response.render("policy.ejs");
  }
}
