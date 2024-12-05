const expressAsyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "nk52712000@gmail.com",
        pass: "xrmqddrbzwzemjlx",
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    var mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `New Message from Contact Form ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    html: `You have received a new message from ${name} (${email}):\n\n${message}`,
};

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send({ message: "Failed to send email", error });
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).send({ message: "Email sent successfully" });
        }
    });
});



module.exports = { sendEmail };