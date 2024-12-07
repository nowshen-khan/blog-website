const express = require("express");
const connectDB  = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv")
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require("./routes/blogRoutes");
const errorMiddleware = require('./middlewares/errorMiddleware');
const serviceRoutes = require('./routes/serviceRoutes');
const teamRoutes = require('./routes/teamRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const router = express.Router();
const messageRoutes = require('./routes/messageRoutes');
const sendEmail = require('./utils/mailer');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api", authRoutes)
app.use("/api/blogs", blogRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/team", teamRoutes);
app.use("/", dashboardRoutes);
app.use("/api/messages", messageRoutes);

app.use(errorMiddleware);


app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Route to send email
app.post("/send-email", sendEmail);

const apiUrl = import.meta.env.VITE_API_URL;

fetch(`${apiUrl}/api`)
    .then(response => response.json())
    .then(data => console.log(data)); // "Hello from Backend!"


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


module.exports = app;