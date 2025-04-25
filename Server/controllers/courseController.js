const Course = require("../models/courses");

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

module.exports = {
  getMyCourses,
};
