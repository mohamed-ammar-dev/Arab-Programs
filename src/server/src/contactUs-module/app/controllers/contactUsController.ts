import { Request, Response } from "express";
import { MAIL_TEMPLATE } from "../../../shared/enums/mailTemplates";
import { MailService } from "../../../shared/mailService/mailService";
import { sendResponse } from "../../../shared/utils/sendResponse";

export class ContactUsController {
  async sendMessage(request: Request, response: Response) {
    await new MailService().send({
      receiver: request.body.email,
      templateType: MAIL_TEMPLATE.CONTACT_US,
      replace: { name: request.body.name, message: request.body.message },
    });

    sendResponse(response);
  }
}
