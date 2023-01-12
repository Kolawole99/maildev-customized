const MailDev = require('maildev');

const { SMTP_PORT, WEB_PORT } = process.env;

const maildev = new MailDev({
    web: WEB_PORT,
    smtp: SMTP_PORT,
});
maildev.listen();
