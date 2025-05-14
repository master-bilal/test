const Course = require("../models/courses");

// ✅ جلب كل الكورسات لعرضها للطلاب
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("teacher", "username");
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "فشل في جلب الكورسات" });
  }
};

// ✅ جلب تفاصيل كورس معين (لصفحة التفاصيل)
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("teacher", "username")
      .populate("videos");

    if (!course) {
      return res.status(404).json({ message: "الكورس غير موجود" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "فشل في جلب تفاصيل الكورس" });
  }
};

// ✅ جلب الكورسات الخاصة بالمدرس الحالي (حسب التوكن)
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

// ✅ جلب فيديوهات كورس معين
const getVideos = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const course = await Course.findById(courseId).populate("videos");

    if (!course) {
      return res.status(404).json({ message: "لم يتم العثور على الكورس" });
    }

    res.status(200).json(course.videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ في الخادم" });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  getMyCourses,
  getVideos,
};
