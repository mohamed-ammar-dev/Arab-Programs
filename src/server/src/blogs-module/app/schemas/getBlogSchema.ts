import Joi from "joi";

export const getBlogSchema = Joi.object({
  blogId: Joi.number().required(),
});
