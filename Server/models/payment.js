const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // المستخدم الذي دفع

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    }, // الدورة التي تم دفع ثمنها
    paymentStatus: {
      type: String,
      enum: ["paid", "pending", "failed"],
      default: "pending",
      required: true,
    }, // حالة الدفع
  },
  { timestamps: true } // هذا يضيف createdAt و updatedAt تلقائيًا
);

module.exports =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
