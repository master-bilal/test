const Video = require("../models/video");
const Course = require("../models/courses");

const addVideoToCourse = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { courseId } = req.params;

    if (!req.file) {
      return res.status(400).json({ message: "No video file provided" });
    }

    // تأكد إن الكورس موجود
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // إنشاء الفيديو
    const newVideo = await Video.create({
      title,
      description,
      videoUrl: req.file.filename, // فقط اسم الملف لأن المسار معروف
      courseId,
    });

    // تحديث الكورس
    course.videos.push(newVideo._id);
    await course.save();

    res
      .status(201)
      .json({ message: "Video uploaded successfully", video: newVideo });
  } catch (error) {
    console.error("Video upload error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addVideoToCourse };
