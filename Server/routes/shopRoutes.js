// routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");
const videoController = require("../controllers/videoController");
router.get("/courses", courseController.getAllCourses);
router.get("/courses/:id", courseController.getCourseById);
router.get("/courses/:id/videos", videoController.getCourseVideos);

module.exports = router;
