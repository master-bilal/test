const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
  meetingUrl: { type: String },
});

module.exports = mongoose.model("Availability", availabilitySchema);
