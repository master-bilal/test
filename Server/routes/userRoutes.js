const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

// Public routes
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

router.post("/subscribe", authMiddleware, userController.updateSubscription);

// Protected routes (require authentication)
router.get("/profile", authMiddleware, userController.getUserProfile);
router.put("/profile", authMiddleware, userController.updateUserProfile);
router.put(
  "/profile/picture",
  authMiddleware,
  upload.single("profilePicture"),
  userController.updateProfilePicture
);

module.exports = router;
