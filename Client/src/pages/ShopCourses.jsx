import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaGraduationCap,
  FaUser,
  FaBook,
  FaMoneyBillWave,
  FaSearch,
  FaStar,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";
import image from "../images/Elearning_platform.jpg";

const ShopCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5000/api/shop/courses")
      .then((res) => {
        setCourses(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // حركات الأنيميشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-white mt-[6rem]" dir="rtl">
      {/* مقدمة الصفحة مع أنيميشن */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-6"
      >
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            اكتشف عالم المعرفة مع كورساتنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
          >
            دورات تعليمية عالية الجودة تقدمها نخبة من الخبراء لتطوير مهاراتك
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative max-w-xl mx-auto"
          >
            <input
              type="text"
              placeholder="ابحث عن الكورس الذي تريده..."
              className="w-full py-4 px-6 rounded-full shadow-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* لماذا نختارنا */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <motion.h2
                  className="text-3xl font-bold text-green-700 mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  لماذا تختار منصتنا؟
                </motion.h2>

                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                      <FaGraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">
                        جودة عالية
                      </h3>
                      <p className="text-gray-600">
                        محتوى تعليمي معتمد ومحدث باستمرار من قبل خبراء متخصصين
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                      <FaClock size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">
                        مرونة في التعلم
                      </h3>
                      <p className="text-gray-600">
                        تعلم في أي وقت ومن أي مكان حسب جدولك الخاص
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                      <FaUsers size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">
                        مجتمع تعليمي
                      </h3>
                      <p className="text-gray-600">
                        انضم إلى مجتمع من المتعلمين وشارك في المناقشات
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="md:w-1/2">
                <motion.img
                  src={image}
                  alt="التعلم الإلكتروني"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* قسم الكورسات */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="flex justify-between items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-green-700 relative">
              <span className="relative inline-block">
                الكورسات المتاحة
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-500"></span>
              </span>
            </h2>
            <p className="text-green-600 font-medium bg-green-100 px-4 py-2 rounded-full">
              {filteredCourses.length} كورس متاح
            </p>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"
              ></motion.div>
            </div>
          ) : filteredCourses.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FaBook className="mx-auto text-green-300 text-6xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">
                لا توجد كورسات متاحة
              </h3>
              <p className="text-gray-500 mb-6">
                لم يتم العثور على كورسات تطابق بحثك
              </p>
              <button
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
                onClick={() => setSearchTerm("")}
              >
                عرض جميع الكورسات
              </button>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course._id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                >
                  <Link to={`/shop/courses/${course._id}`} className="block">
                    <div className="relative">
                      <motion.img
                        src={`http://localhost:5000/${course.coursePicture}`}
                        alt={course.courseTitle}
                        className="w-full h-56 object-cover"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/images/course-placeholder.jpg";
                        }}
                      />
                      <motion.div
                        className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaMoneyBillWave className="ml-1" />
                        {course.price} دينار
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors">
                        {course.courseTitle}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {course.courseDescription || "لا يوجد وصف لهذا الكورس"}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <FaUser className="text-green-600 mr-2" />
                          <span className="text-sm text-gray-600">
                            {course.teacher?.username || "مدرس غير معروف"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* دعوة للعمل */}
      <motion.section
        className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            جاهز لبدء رحلتك التعليمية؟
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            انضم إلى آلاف الطلاب الذين طوروا مهاراتهم مع منصتنا التعليمية
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/login"
              className="inline-block bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              سجل الآن مجانًا
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* تذييل الصفحة */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} منصة التعلم الإلكتروني. جميع
            الحقوق محفوظة
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-green-300 transition-colors">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-green-300 transition-colors">
              اتصل بنا
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopCourses;
