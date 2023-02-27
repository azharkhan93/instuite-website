async function contactUs() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var phone = document.getElementById('phone').value;
    // var date = document.getElementById('date-picker').value;


    if (name === "") {
        alert('Enter Valid Name')
        return;
    }
    if (email === "") {
        alert('All Fields Are Required')
        return;
    }
    if (message === "") {
        alert('All Fields Are Required')
        return;
    }
    if (phone.length < 7 || phone.length > 14) {
        alert('Enter a Vaild Phone Number')
        return;
    }

    // var data1 = {
    //     name: name,
    //     email: email,
    //     message: message,
    //     phone: phone
    // }
    // await fetch("http://localhost:3000/api/cntct", {
    //     method: 'POST',
    //     body: JSON.stringify(data1)
    // })
    $("#success_message").show()
    console.log(data1);
}


// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const { check, validationResult } = require('express-validator');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Endpoint to handle form submissions
// app.post(
//   '/contact',
//   [
//     // Validate form fields
//     check('name').notEmpty(),
//     check('email').isEmail(),
//     check('phone').notEmpty(),
//   ],
//   async (req, res) => {
//     // Check for validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(422).json({ errors: errors.array() });
//     }

//     // Send the email
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-email-password',
//       },
//     });

//     const { name, email, phone } = req.body;

//     const mailOptions = {
//       from: email,
//       to: 'owner-email@gmail.com',
//       subject: 'New form submission',
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//       `,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).send('Form submitted successfully');
//     } catch (error) {
//       res.status(500).send('Failed to submit form');
//     }
//   }
// );

// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });



// {
//     "name": "John Doe",
//     "email": "johndoe@example.com",
//     "message": "This is a test message",
//     "phone": "1234567890"
//   }

// const express = require('express')
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');

// const app = express();


// app.use(bodyParser.json());

// app.post('/home.html', (req, res) => {
//     const { name, email, message, phone } = req.body;

//     if (!name || !email || !message || !phone) {
//         return res.status(400).send('All fields are required');
//     }

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'azharkhan.work101@gmail.com',
//             pass: 'tgrenade@123'
//         }
//     });

//     const mailOptions = {
//         from: 'youremail@gmail.com',
//         to: 'azharkhan.work101@gmail.com',
//         subject: 'New message from contact form',
//         html: `
//       <p>Name: ${name}</p>
//       <p>Email: ${email}</p>
//       <p>Phone: ${phone}</p>
//       <p>Message: ${message}</p>
//     `
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             return res.status(500).send('Something went wrong');
//         } else {
//             console.log('Email sent: ' + info.response);
//             return res.status(200).send('Message sent successfully');
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log('server started');
// });
