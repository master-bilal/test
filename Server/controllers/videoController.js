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
      videoUrl: `uploads/courseVideos/${req.file.filename}`,
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
const getCourseVideos = async (req, res) => {
  try {
    const courseId = req.params.id;

    // التأكد من وجود الكورس
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({
        success: false,
        message: "الكورس غير موجود",
      });
    }

    // جلب الفيديوهات المرتبطة بالكورس
    const videos = await Video.find({ courseId })
      .sort({ uploadedAt: 1 })
      .select("-__v -createdAt -updatedAt");

    res.status(200).json({
      success: true,
      count: videos.length,
      data: videos,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "حدث خطأ في السيرفر",
    });
  }
};

module.exports = { addVideoToCourse, getCourseVideos, };
