import { DI_TYPES } from "../../../shared/types/di";
import { IBlogsCoreService } from "../../interfaces/IBlogsCoreService";
import { IBlogsRepo } from "../ports/IBlogsRepo";
import "reflect-metadata";
import { inject, injectable } from "inversify";

@injectable()
export class BlogsCoreService implements IBlogsCoreService {
  constructor(
    @inject(DI_TYPES.BlogsRepo)
    private blogsRepo: IBlogsRepo
  ) {}

  async getAll(page: number) {
    const limit = 6;

    const blogs = await this.blogsRepo.getAll({
      page,
      limit,
    });

    let pagesLength = Math.ceil(blogs.count / limit);

    pagesLength == 0 ? 1 : pagesLength;

    let pages = [];

    for (let i = 1; i < pagesLength + 1; i++) pages.push(i);

    return { blogs, pages };
  }

  async getBlog(blogId: number) {
    const blog = await this.blogsRepo.getBlog(blogId);

    const date = blog.createdAt;
    blog.createdAt =
      date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    return blog;
  }
}
