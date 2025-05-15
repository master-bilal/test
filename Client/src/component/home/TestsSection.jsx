import React, { useEffect, useState } from "react";
import { FaClipboardCheck, FaArrowRight, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const TestsSection = () => {
  const [featuredTests, setFeaturedTests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // جلب بيانات الاختبارات من نفس API المستخدم في صفحة الاختبارات
    axios
      .get("http://localhost:5000/api/quiz")
      .then((res) => {
        // أخذ أول 4 اختبارات للعرض
        setFeaturedTests(res.data.slice(0, 4));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quizzes", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* العنوان والمقدمة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center bg-green-100 text-green-600 p-3 rounded-full mb-4">
            <FaClipboardCheck className="text-xl" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            اختباراتنا التعليمية
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختبر معرفتك وقدراتك من خلال مجموعة متنوعة من الاختبارات المصممة
            بعناية لتقييم مهاراتك وتطويرها
          </p>
        </motion.div>

        {/* عرض الاختبارات */}
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {featuredTests.map((test, index) => (
                <motion.div
                  key={test._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex-shrink-0 bg-green-100 text-green-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <FaBook className="text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {test.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {test.description}
                    </p>
                    <div className="text-sm text-gray-500">
                      عدد الأسئلة: {test.questions?.length || 0}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* زر الانتقال لصفحة الاختبارات */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Link to="/exams">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  عرض جميع الاختبارات
                  <FaArrowRight className="mr-2" />
                </motion.button>
              </Link>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default TestsSection;
