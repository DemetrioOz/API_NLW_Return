import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapters";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e33e2bfe4d82fe",
    pass: "4c302d3901d274",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Demetrio <demetrio@gmail.com>",
      subject,
      html: body,
    });
  }
}
