const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "MindBridge API Server Running!" });
});

// AI Chat Route
app.post("/api/chat", (req, res) => {
  // OpenAI integration will go here
  res.json({ message: "AI chat endpoint" });
});

// Booking Route
app.post("/api/booking", (req, res) => {
  res.json({ message: "Booking endpoint" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
