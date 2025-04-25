// const express = require("express");
// const router = express.Router();
// const Video = require("../models/video");
// const Course = require("../models/courses");
// const authMiddleware = require("../middleware/authMiddleware");
// const multer = require("../middleware/uploadMiddleware");

// // تعديل مسار الحفظ داخل multer إذا كنت بدك تحفظ فيديو مش صورة، فمثلاً:
// const videoUpload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       const uploadDir = "public/uploads/videos";
//       if (!require("fs").existsSync(uploadDir)) {
//         require("fs").mkdirSync(uploadDir, { recursive: true });
//       }
//       cb(null, uploadDir);
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       cb(
//         null,
//         req.userId +
//           "-" +
//           uniqueSuffix +
//           require("path").extname(file.originalname)
//       );
//     },
//   }),
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype.startsWith("video/")) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only video files are allowed!"), false);
//     }
//   },
// }).single("video"); // 👈 اسم الحقل في الفورم

// // @route   POST /api/videos/:courseId
// // @desc    رفع فيديو وربطه بكورس
// // @access  Private
// router.post("/:courseId", authMiddleware, (req, res) => {
//   videoUpload(req, res, async function (err) {
//     if (err instanceof multer.MulterError) {
//       return res
//         .status(400)
//         .json({ message: "Multer error", error: err.message });
//     } else if (err) {
//       return res
//         .status(400)
//         .json({ message: "Upload error", error: err.message });
//     }

//     const { title, description } = req.body;
//     const videoPath = req.file?.path;

//     if (!videoPath) {
//       return res.status(400).json({ message: "No video file uploaded" });
//     }

//     try {
//       const newVideo = new Video({
//         title,
//         description,
//         videoUrl: "/" + videoPath.replace(/\\/g, "/"), // لعرضها لاحقاً
//         courseId: req.params.courseId,
//       });

//       const savedVideo = await newVideo.save();

//       // أضف الفيديو إلى الكورس
//       await Course.findByIdAndUpdate(req.params.courseId, {
//         $push: { videos: savedVideo._id },
//       });

//       res.status(201).json(savedVideo);
//     } catch (error) {
//       console.error("Error uploading video:", error);
//       res.status(500).json({ message: "Server error while uploading video" });
//     }
//   });
// });

// module.exports = router;
