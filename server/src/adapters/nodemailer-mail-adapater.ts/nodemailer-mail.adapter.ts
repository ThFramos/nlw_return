import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bd0b5268f58a0a",
    pass: "9ac843d77cc90d"
  }
});

export class NodemailerMailAdapter implements MailAdapter {

  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: 'thiago <th.framos@gmail.com>',
      subject,
      html: body
    });


  }
}