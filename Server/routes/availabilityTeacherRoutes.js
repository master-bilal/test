const express = require("express");
const router = express.Router();
const {
  getAvailabilities,
  addAvailability,
  getAvailableSlots,
  bookAvailability,
  getUserBookings,
} = require("../controllers/availabilityTeacherController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/availabilities", authMiddleware, getAvailabilities);

router.post("/availabilities", authMiddleware, addAvailability);

router.get("/available-slots", getAvailableSlots);
router.post("/book-slot", authMiddleware, bookAvailability);

router.get("/my-bookings", authMiddleware, getUserBookings);

module.exports = router;
