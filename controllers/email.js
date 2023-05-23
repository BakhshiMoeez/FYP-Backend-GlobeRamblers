const pug = require('pug');
const nodemailer = require('nodemailer');

module.exports = class Email {
  constructor(mail, name) {
    this.to = mail;
    this.name = name;
    this.from = process.env.EMAIL_FROM;
  }

  newTransport() {
    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(template, subject, notificationObj) {
    const description1 = {
      'New Following': ``,
      'Book Buy Request': `Someone wants to buy your `,
      'Book Sell Request': `Someone wants to sell their `,
      'Book Request Accepted': `Your request for `,
      'Book Request Rejected': `Your request for `,
      'Hood Connection': `Someone connected with you on your book `,
      'Hood Request Accepted': `Your request for `,
      'Hood Request Rejected': `Your request for `,
    };
    const description2 = {
      'New Following': ` just followed you! Why not take a tour of their profile and follow back?`,
      'Book Buy Request': ` book! what are you waiting for then?`,
      'Book Sell Request': ` book! Hurry up..`,
      'Book Request Accepted': ` book has accepted. Want to explore more?`,
      'Book Request Rejected': ` book has rejected. Want to explore more?`,
      'Hood Connection': `! what are you waiting for then?`,
      'Hood Request Accepted': ` book has accepted. Want to explore more?`,
      'Hood Request Rejected': ` book has rejected. Want to explore more?`,
    };
    const html = pug.renderFile(`${__dirname}/${template}.pug`, {
      heading: notificationObj.type,
      userName: this.name,
      notiName: notificationObj.name,
      description1: description1[notificationObj.type],
      description2: description2[notificationObj.type],
    });
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };
    await this.newTransport().sendMail(mailOptions);
  }

  async sendNotification(notificationObj) {
    await this.send(
      'emailTemplate',
      `BookHood | ${notificationObj.type}`,
      notificationObj
    );
  }
};
