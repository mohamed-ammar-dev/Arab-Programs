import { BaseRepo } from "../../../../shared/database/repository/baseRepo";
import { injectable } from "inversify";
import { BlogsModel } from "../../../database/models/blogs";
import { IBlogsRepo } from "../../../domain/ports/IBlogsRepo";

@injectable()
export class BlogsRepo extends BaseRepo implements IBlogsRepo {
  constructor() {
    super(BlogsModel);
  }

  async getAll(params: any) {
    return await this.findWithPagination({
      ...params,
      order: ["createdAt", "DESC"],
      attributes: ["id", "title", "picture"],
    });
  }

  async getBlog(blogId: number) {
    return await this.findOne({ condition: { id: blogId } });
  }
}
