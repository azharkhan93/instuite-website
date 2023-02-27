const { Router } = require('express');
const router = Router();

const nodemailer = require('nodemailer');

router.post('/send-email',  (req, res) => {
    const { name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        
        auth: {
            user: 'azharkhan.work101@gmail.com',
            pass: 'mygtwdpecckbahyg'
        }
    });

    const mailOptions =({
        from: email, // sender address,
        to: 'azharkhan.work101@gmail.com',
        subject: 'Website Contact Form',
        // text: 'Hello World'
        html: contentHTML
    });
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Something went wrong');
        } else {
            console.log('Email sent: ' + info.response);
            return res.status(200).send('Message sent successfully');
        }
    });

    // console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    // res.redirect('/success.html');
});

module.exports = router;