const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  certificateIssuedDate: { type: Date, default: Date.now },
  certificateUrl: { type: String, required: true },
});

module.exports =
  mongoose.models.Certificate ||
  mongoose.model("Certificate", certificateSchema);
