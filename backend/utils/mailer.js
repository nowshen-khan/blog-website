require('dotenv').config()
const nodemailer = require('nodemailer');

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail", // or 'smtp.example.com'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (req, res) => {
  const {name, email, message} = req.body;
  
    const mailOptions = {
    from: email,
    to:  process.env.EMAIL_USER,
    subject: `New Message from Contact Form ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    // html: `You have received a new message from ${name} (${email}):\n\n${message}`,
    
    
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
 
};

module.exports = sendEmail;