const Availability = require("../models/availability");
const Booking = require("../models/booking");

exports.getAvailabilities = async (req, res) => {
  try {
    const teacherId = req.userId;
    const availabilities = await Availability.find({ teacherId });
    res.json(availabilities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching availabilities" });
  }
};

exports.addAvailability = async (req, res) => {
  try {
    const { date, startTime, endTime, meetingUrl } = req.body;
    const teacherId = req.userId;

    const newAvailability = new Availability({
      teacherId,
      date,
      startTime,
      endTime,
      meetingUrl,
    });

    await newAvailability.save();
    res.status(201).json(newAvailability);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding availability" });
  }
};

exports.getAvailableSlots = async (req, res) => {
  try {
    const availableSlots = await Availability.find({ isBooked: false });
    res.status(200).json(availableSlots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching available slots" });
  }
};

exports.bookAvailability = async (req, res) => {
  try {
    const studentId = req.userId;
    const { availabilityId } = req.body;

    const availability = await Availability.findById(availabilityId);
    if (!availability || availability.isBooked) {
      return res
        .status(400)
        .json({ message: "Slot is already booked or not found" });
    }

    // Create booking
    const booking = new Booking({
      studentId,
      teacherId: availability.teacherId,
      availabilityId,
    });

    await booking.save();

    // Update the slot
    availability.isBooked = true;
    await availability.save();

    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error booking the availability" });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const studentId = req.userId;

    const bookings = await Booking.find({ studentId })
      .populate("availabilityId")
      .populate("teacherId", "name email");

    res.status(200).json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching user bookings" });
  }
};
