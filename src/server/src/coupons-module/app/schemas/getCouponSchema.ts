import Joi from "joi";

export const getCouponSchema = Joi.object({
  couponId: Joi.number().required(),
});
