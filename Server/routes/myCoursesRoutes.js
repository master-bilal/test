const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  getMyCourses,
  getCourseVideos,
} = require("../controllers/myCoursesController");

router.get("/", authMiddleware, getMyCourses);
router.get("/:courseId/", authMiddleware, getCourseVideos);

module.exports = router;
