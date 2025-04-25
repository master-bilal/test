const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: [true, "Plan name is required"],
    enum: {
      values: ["basic", "standard", "premium"],
      message: "Invalid plan type",
    },
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [20, "Description should be at least 20 characters"],
  },
  features: {
    type: [String],
    required: [true, "At least one feature is required"],
    validate: {
      validator: function (features) {
        return features.length > 0;
      },
      message: "At least one feature is required",
    },
  },
  pricing: {
    weekly: {
      type: Number,
      required: [true, "Weekly price is required"],
      min: [0, "Price cannot be negative"],
    },
    monthly: {
      type: Number,
      required: [true, "Monthly price is required"],
      min: [0, "Price cannot be negative"],
    },
    yearly: {
      type: Number,
      required: [true, "Yearly price is required"],
      min: [0, "Price cannot be negative"],
    },
    currency: {
      type: String,
      default: "USD",
      enum: ["USD", "SAR", "JD"],
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

subscriptionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports =
  mongoose.models.Subscription ||
  mongoose.model("Subscription", subscriptionSchema);
