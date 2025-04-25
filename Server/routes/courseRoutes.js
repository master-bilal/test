const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadDeep"); // استيراد تكوين multer الموحد
const Course = require("../models/courses");
const Video = require("../models/video");
const courseController = require("../controllers/courseController");


router.post(
  "/create",
  authMiddleware,
  upload.fields([
    { name: "coursePicture", maxCount: 1 },
    { name: "videos", maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const { courseTitle, courseDescription, price } = req.body;
      const teacherId = req.userId;

      const coursePicture = req.files["coursePicture"]
        ? req.files["coursePicture"][0].path
        : null;

      const newCourse = new Course({
        courseTitle,
        courseDescription,
        price: price || 0,
        teacher: teacherId,
        coursePicture,
      });

      await newCourse.save();

      if (req.files["videos"]) {
        const videoPromises = req.files["videos"].map((videoFile, index) => {
          return new Video({
            title: videoFile.originalname,
            videoUrl: videoFile.path,
            courseId: newCourse._id, // إضافة courseId
            order: index + 1, // إضافة order تلقائيًا
          }).save();
        });

        const savedVideos = await Promise.all(videoPromises);
        newCourse.videos = savedVideos.map((video) => video._id);
        await newCourse.save();
      }

      res.status(201).json({
        success: true,
        message: "Course created successfully",
        course: newCourse,
      });
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create course",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      });
    }
  }
);



// 📌 راوت إحضار كورسات الأستاذ الحالي
router.get("/my-courses", authMiddleware, courseController.getMyCourses);

module.exports = router;
