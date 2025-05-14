const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  availabilityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Availability",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed", "cancelled"],
    default: "pending",
  },
  videoLink: { type: String },
  certificate: { type: String }, // رابط الشهادة
});

module.exports = mongoose.model("Booking", bookingSchema);
