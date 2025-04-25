const { body } = require("express-validator");

exports.validateSubscription = [
  body("planName")
    .notEmpty()
    .withMessage("Plan name is required")
    .isIn(["basic", "standard", "premium"])
    .withMessage("Invalid plan type"),

  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 20 })
    .withMessage("Description must be at least 20 characters"),

  body("features")
    .isArray({ min: 1 })
    .withMessage("At least one feature is required")
    .custom((features) => features.every((f) => typeof f === "string"))
    .withMessage("All features must be strings"),

  body("pricing.weekly")
    .notEmpty()
    .withMessage("Weekly price is required")
    .isFloat({ min: 0 })
    .withMessage("Weekly price must be a positive number"),

  body("pricing.monthly")
    .notEmpty()
    .withMessage("Monthly price is required")
    .isFloat({ min: 0 })
    .withMessage("Monthly price must be a positive number"),

  body("pricing.yearly")
    .notEmpty()
    .withMessage("Yearly price is required")
    .isFloat({ min: 0 })
    .withMessage("Yearly price must be a positive number"),

  body("pricing.currency")
    .optional()
    .isIn(["USD", "SAR", "JD"])
    .withMessage("Invalid currency type"),
];
