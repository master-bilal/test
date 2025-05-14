const express = require("express");
const router = express.Router();
const {
  getAvailabilities,
  addAvailability,
} = require("../controllers/availabilityTeacherController");
const authMiddleware = require("../middleware/authMiddleware");

// Get all availabilities for the teacher
router.get("/availabilities", authMiddleware, getAvailabilities);

// Add a new availability
router.post("/availabilities", authMiddleware, addAvailability);

module.exports = router;
