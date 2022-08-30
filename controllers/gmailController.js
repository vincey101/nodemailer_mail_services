const nodemailer = require('nodemailer');
module.exports.gmailService = () => {
    let transporter = nodemailer.createTransport({
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
            user: "vincentoladimeji@gmail.com",
            pass: "UfaZ34NYxJMIQTPD"
        },
        tls: { rejectUnauthorized: false }
    });


    const mailOptions = {
        from: '9671d8e9c2-f7af74+1@inbox.mailtrap.io', // Sender address
        to: 'vcent101@yahoo.com', // List of recipients
        subject: 'Testing', // Subject line
        text: 'Hello People!, Welcome to Parach!', // Plain text body
        html: `<h1> happy me! </h1>`,
        attachments: [
            { filename: 'parach_logo.png', path: './images/parach_logo.png' }
        ]
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("sent: " + info.response);
    })

}
