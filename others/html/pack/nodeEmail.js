"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "163", // no need to set host or port etc.
    secureConnection: true, // 使用了 SSL
    auth: {
      user: "mypridelife@163.com",
      pass: "Gg147258369"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "mypridelife@163.com", // 发件地址
    to: "mypridelife@qq.com", // 收件列表
    subject: "感谢注册", // 标题
    html: "<b>Hello world?</b> " // html 内容
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
