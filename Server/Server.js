const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
require("dotenv").config();
const path = require("path");



//the routes importing
const userRoutes = require("./routes/userRoutes")
const adminuser = require("./routes/adminUserRoutes")
const courseRoutes = require("./routes/courseRoutes"); // تأكد من المسار حسب مكان الملف
const contactRoutes = require("./routes/contactRoutes")
const videoRoutes = require("./routes/videoRoutes");


const app = express();
// Connect to the database
connectDB();

// CORS configuration
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:8080",
  "http://localhost:5174",
];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());


//the routes
app.use('/api', contactRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/admin/users", adminuser);
app.use("/api/courses", courseRoutes);
app.use("/api", videoRoutes);





// app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// app.use("/uploads", express.static("public/uploads"));

// Serve static files للبروفايل
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));





// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Not Foundbil;" });
});





// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});





// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
