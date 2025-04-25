const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },
    isdeleted: { type: Boolean, default: false },
    role: {
      type: String,
      enum: ["user", "teacher", "admin"],
      required: true,
      default: "user",
    },
    profilePicture: { type: String },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    Certificate: [{ type: mongoose.Schema.Types.ObjectId, ref: "Certificate" }],

    subscription: {
      planName: { type: String, enum: ["basic", "standard", "premium"] },
      period: { type: String, enum: ["weekly", "monthly", "yearly"] },
      price: { type: Number },
      currency: { type: String, enum: ["USD", "SAR", "JD"], default: "USD" },
      subscribedAt: { type: Date, default: Date.now },
      expiresAt: { type: Date },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
