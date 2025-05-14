const User = require("../models/user");
const Course = require("../models/courses");
const Video = require("../models/video");

const getMyCourses = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate({
      path: "courses",
      populate: [
        {
          path: "teacher",
          select: "username",
        },
        {
          path: "videos",
          select: "_id", // Only get the IDs to count them
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Map through courses and add videosCount
    const coursesWithCount = user.courses.map((course) => ({
      ...course.toObject(),
      videosCount: course.videos ? course.videos.length : 0,
    }));

    res.json(coursesWithCount);
  } catch (error) {
    console.error("Error fetching user courses:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getCourseVideos = async (req, res) => {
  try {
    const courseId = req.params.courseId;

    // تأكد أن المستخدم يمتلك الدورة
    const user = await User.findById(req.userId);
    if (!user.courses.includes(courseId)) {
      return res.status(403).json({ message: "You do not own this course" });
    }

    // جلب تفاصيل الدورة
    const course = await Course.findById(courseId).populate(
      "teacher",
      "username"
    );

    // جلب الفيديوهات التابعة للدورة
    const videos = await Video.find({ courseId });

    res.json({
      course,
      videos,
    });
  } catch (error) {
    console.error("Error fetching course videos:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getMyCourses, getCourseVideos };
