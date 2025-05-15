const Booking = require("../models/bookingCourse");
const Course = require("../models/courses");

// 📌 Create a booking
const createBooking = async (req, res) => {
  try {
    const userId = req.userId;
    const { courseId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the user already booked
    const alreadyBooked = await Booking.findOne({
      user: userId,
      course: courseId,
    });
    if (alreadyBooked) {
      return res.status(400).json({ message: "Course already booked" });
    }

    const booking = new Booking({
      user: userId,
      course: course._id,
      price: course.price,
      paymentStatus: "pending", // or integrate with real payment gateway
    });

    await booking.save();

    res.status(201).json({
      success: true,
      message: "Course booked successfully",
      booking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Failed to create booking" });
  }
};

// 📌 Get all bookings for current user
const getMyBookings = async (req, res) => {
  try {
    const userId = req.userId;
    const bookings = await Booking.find({ user: userId }).populate("course");

    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
};
