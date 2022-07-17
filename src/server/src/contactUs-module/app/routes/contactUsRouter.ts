import express from "express";
import catchAsync from "../../../error-module/utils/catchAsync";
import joiCatchAsync from "../../../error-module/utils/joiCatchAsync";
import { validate } from "../../../shared/middleware/validate";
import { ContactUsController } from "../controllers/contactUsController";
import { sendMessageSchema } from "../schemas/sendMessageSchema";

const contactUsRouter = express.Router();

contactUsRouter.post(
  "/send",
  joiCatchAsync(validate(sendMessageSchema)),
  catchAsync(new ContactUsController().sendMessage)
);

export { contactUsRouter };
