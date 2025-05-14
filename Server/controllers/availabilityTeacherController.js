const Availability = require("../models/availability");

// Get all availabilities for the logged-in teacher
exports.getAvailabilities = async (req, res) => {
  try {
    const teacherId = req.userId; // ✅ استخدمنا userId بدلاً من user._id
    const availabilities = await Availability.find({ teacherId });
    res.json(availabilities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching availabilities" });
  }
};

// Add new availability
exports.addAvailability = async (req, res) => {
  try {
    const { date, startTime, endTime } = req.body;
    const teacherId = req.userId; // ✅ نفس الشيء هنا

    const newAvailability = new Availability({
      teacherId,
      date,
      startTime,
      endTime,
    });

    await newAvailability.save();
    res.status(201).json(newAvailability);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding availability" });
  }
};
