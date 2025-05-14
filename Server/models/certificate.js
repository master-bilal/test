const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true,
  },
  issuedAt: { type: Date, default: Date.now },
  certificateLink: { type: String, required: true },
});

module.exports = mongoose.model("Certificate", certificateSchema);
