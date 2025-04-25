const Course = require("../models/courses");

// دالة لجلب الكورسات الخاصة بالمدرس
const getMyCourses = async (req, res) => {
  try {
    const courses = await Course.find({ teacher: req.userId }).populate(
      "videos"
    );
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "فشل في جلب الكورسات" });
  }
};

// دالة لجلب الفيديوهات الخاصة بكورس معين
const getVideos = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId).populate("videos");

    if (!course) {
      return res.status(404).json({ message: "لم يتم العثور على الكورس" });
    }

    // إرجاع الفيديوهات الخاصة بالكورس
    res.status(200).json(course.videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ في الخادم" });
  }
};

module.exports = {
  getMyCourses,
  getVideos, // إضافة getVideos إلى التصدير
};
