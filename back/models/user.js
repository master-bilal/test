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
  },
  { timestamps: true }
);

// module.exports = mongoose.model("User", userSchema);
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
