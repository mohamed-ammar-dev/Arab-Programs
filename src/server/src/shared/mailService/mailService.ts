import { transporter } from "../../3rd-party-module/mail";
import { MAIL_TEMPLATE } from "../enums/mailTemplates";
import { sendMail } from "../types/sendMail";
import { contactUsTemplate } from "./templates/contactUs";
import { EMAIL_SENDER_FROM } from "../../config/constants";
import { INotifier } from "../interfaces/INotifier";
import { injectable } from "inversify";
import "reflect-metadata";
const SibApiV3Sdk = require("sib-api-v3-sdk");

@injectable()
export class MailService implements INotifier {
  async send(params: sendMail) {
    const template = this.getMailTemplate(params.templateType, params.replace);

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = params.templateType;
    sendSmtpEmail.htmlContent = template;
    sendSmtpEmail.sender = {
      name: params.replace.name,
      email: params.receiver,
    };
    sendSmtpEmail.to = [{ email: EMAIL_SENDER_FROM }];

    transporter.sendTransacEmail(sendSmtpEmail);
  }

  private getMailTemplate(templateType: MAIL_TEMPLATE, replace: any) {
    switch (templateType) {
      case MAIL_TEMPLATE.CONTACT_US:
        return contactUsTemplate(replace);
    }
  }
}
