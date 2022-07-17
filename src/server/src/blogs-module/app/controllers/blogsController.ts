import { Request, Response } from "express";
import { diContainer } from "../../../config/inversify.config";
import { DI_TYPES } from "../../../shared/types/di";
import { sendResponse } from "../../../shared/utils/sendResponse";
import { IBlogsCoreService } from "../../interfaces/IBlogsCoreService";

export class BlogsController {
  async getAll(request: Request, response: Response) {
    const blogsCoreService = diContainer.get<IBlogsCoreService>(
      DI_TYPES.BlogsCoreService
    );

    const blogs = await blogsCoreService.getAll(0);

    sendResponse(response, blogs);
  }

  async getBlog(request: Request, response: Response) {
    const blogsCoreService = diContainer.get<IBlogsCoreService>(
      DI_TYPES.BlogsCoreService
    );

    const blog = await blogsCoreService.getBlog(request.body);

    sendResponse(response, blog);
  }
}
