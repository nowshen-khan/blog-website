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

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(cors({ origin: "http://localhost:5173" }));

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




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


