const express = require("express");
const router = express.Router();
const { addVideoToCourse } = require("../controllers/videoController");
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadVideo");

// راوت رفع فيديو جديد على كورس
router.post(
  "/courses/:courseId/videos",
  auth,
  upload.single("video"),
  addVideoToCourse
);

module.exports = router;
