const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const bookingController = require("../controllers/bookingController");

router.post("/book", authMiddleware, bookingController.createBooking);
router.get("/my-bookings", authMiddleware, bookingController.getMyBookings);

module.exports = router;
