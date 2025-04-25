const express = require("express");
const router = express.Router();
const Course = require("../models/courses");
const authMiddleware = require("../middleware/authMiddleware");

// @route   POST /api/courses
// @desc    إنشاء كورس جديد
// @access  Private (teacher only)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { courseTitle, courseDescription } = req.body;

    const newCourse = new Course({
      courseTitle,
      courseDescription,
      teacher: req.userId, // من التوكن
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Server error while creating course" });
  }
});
// @route   GET /api/courses/my-courses
// @desc    عرض كل الكورسات الخاصة بالأستاذ الحالي
// @access  Private
router.get("/my-courses", authMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({ teacher: req.userId }).populate("videos");
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ message: "Error fetching courses" });
  }
});

module.exports = router;
