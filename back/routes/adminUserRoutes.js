const express = require("express");
const router = express.Router();
const adminUserController = require("../controllers/adminUserController");

// User statistics
router.get("/stats", adminUserController.getUserStats);

// Get all users with pagination
router.get("/", adminUserController.getUsers);

// Get single user
router.get("/:id", adminUserController.getUser);

// Update user
router.patch("/:id", adminUserController.updateUser);

module.exports = router;
