const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // رابط المستخدم (الطالب)
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  }, // رابط الدورة
  certificateIssuedDate: { type: Date, default: Date.now },
  certificateUrl: { type: String, required: true },
});

module.exports =  mongoose.models.Certificate || mongoose.model("Certificate", certificateSchema);
