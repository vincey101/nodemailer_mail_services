const nodemailer = require('nodemailer');

module.exports.emailService = async (req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "54f00c3f83101a",
                pass: "e4ffe895dcae3d"
            }
        })

        let info = await transporter.sendMail({
            from: '9671d8e9c2-f7af74+1@inbox.mailtrap.io',
            // to:'9671d8e9c2-f7af74+1@inbox.mailtrap.io',
            to: 'vincentoladimeji@gmail.com',
            subject: req.body.subject,
            text: "this is my first mail",
            html: `<h1> happy me! </h1>`
        });

        console.log(`message sent ${info.messageId}`);
        res.status(200).send('message sent')
    } catch (error) {
        console.log(error);

    }
}