// MyCourses.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/my-courses", {
          withCredentials: true,
        });

        let coursesData = [];
        if (Array.isArray(res.data)) {
          coursesData = res.data;
        } else if (Array.isArray(res.data.courses)) {
          coursesData = res.data.courses;
        } else {
          setError("البيانات غير متوقعة من السيرفر");
        }

        // Add videosCount if not already present
        const coursesWithCount = coursesData.map((course) => ({
          ...course,
          videosCount: course.videos ? course.videos.length : 0,
        }));

        setCourses(coursesWithCount);
      } catch (err) {
        console.error("فشل في جلب الدورات", err);
        setError("حدث خطأ أثناء تحميل الدورات");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
      </div>
    );

  if (error)
    return (
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-2xl mx-auto mt-10 rounded"
        role="alert"
      >
        <strong className="font-bold">خطأ! </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            دوراتي التعليمية
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            استمر في رحلة التعلم الخاصة بك
          </p>
        </motion.div>

        {Array.isArray(courses) && courses.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <Link to={`/mycourse/${course._id}`} className="block h-full">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`http://localhost:5000/${course.coursePicture}`}
                        alt={course.courseTitle}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {course.courseTitle}
                        </h3>

                        {/* Teacher Info */}
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span className="mr-1">
                            {course.teacher?.username || "معلّم غير معروف"}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {course.courseDescription}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 text-teal-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                          <span>{course.videosCount} دروس</span>
                        </div>
                        <span className="text-sm font-medium text-teal-600">
                          متابعة التعلم →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-8 text-center max-w-md mx-auto border border-gray-100"
          >
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-teal-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              لا توجد دورات مسجلة
            </h3>
            <p className="mt-2 text-gray-600">
              لم تقم بالتسجيل في أي دورة حتى الآن.
            </p>
            <div className="mt-6">
              <Link
                to="/courses"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                تصفح الدورات المتاحة
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
