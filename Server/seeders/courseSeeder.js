// seeders/courseSeeder.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); // لتحميل متغيرات البيئة من ملف .env

const Course = require("../models/courses");
const User = require("../models/user");
const Video = require("../models/video");

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedCourses = async () => {
  try {
    await Course.deleteMany(); // تنظيف الكورسات القديمة

    // نفترض عندك بيانات مسبقة للمستخدم والفيديوهات
    const teacher = await User.findOne(); // أول أستاذ موجود
    const videos = await Video.find().limit(3); // أول 3 فيديوهات

    if (!teacher || videos.length === 0) {
      console.log("لا يوجد بيانات لمستخدم أو فيديوهات لإضافة الكورسات.");
      process.exit();
    }

    const courses = [
      {
        courseTitle: "دورة تعلم الجافاسكريبت",
        courseDescription: "مقدمة شاملة لتعلم أساسيات JavaScript.",
        coursePicture: "https://example.com/js-course.jpg",
        teacher: teacher._id,
        videos: videos.map((v) => v._id),
      },
      {
        courseTitle: "أساسيات React",
        courseDescription: "ابدأ رحلتك في عالم تطوير الواجهات مع React.",
        coursePicture: "https://example.com/react-course.jpg",
        teacher: teacher._id,
        videos: videos.map((v) => v._id),
      },
    ];

    await Course.insertMany(courses);
    console.log("✅ تم إدخال بيانات الكورسات بنجاح!");
    process.exit();
  } catch (error) {
    console.error("❌ حدث خطأ أثناء إدخال البيانات:", error);
    process.exit(1);
  }
};

seedCourses();
