import { IBaseRepo } from "../../../shared/interfaces/IBaseRepo";

export interface IBlogsRepo extends IBaseRepo {
  getAll(params: { page: number; limit: number }): any;
  getBlog(blogId: number): any;
}
