// src/pages/Courses.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaGraduationCap,
  FaUser,
  FaBook,
  FaMoneyBillWave,
  FaSearch,
} from "react-icons/fa";

const ShopCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5000/api/shop/courses")
      .then((res) => {
        console.log("Courses from backend:", res.data);
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

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      {/* Header Section */}
      <div className="bg-green-600 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">منصة التعلم الإلكترونية</h1>
          <p className="text-xl mb-8">
            ابدأ رحلة التعلم معنا واكتشف مجموعة متنوعة من الكورسات عالية الجودة
          </p>
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="ابحث عن كورس..."
              className="w-full py-3 px-4 pr-12 rounded-full text-green-800 font-medium border-2 border-white focus:outline-none focus:border-green-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 top-3 text-green-600">
              <FaSearch size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="container mx-auto py-12 px-6">
        <div className="bg-green-50 rounded-lg p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="/api/placeholder/600/400"
                alt="تعلم إلكتروني"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                لماذا تختار كورساتنا؟
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-4">
                    <FaGraduationCap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-800">
                      محتوى تعليمي عالي الجودة
                    </h3>
                    <p className="text-gray-600">
                      دروس مصممة بعناية من قبل مختصين في المجال
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-4">
                    <FaUser size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-800">
                      أساتذة خبراء
                    </h3>
                    <p className="text-gray-600">
                      يقدم المحتوى نخبة من الأساتذة ذوي الخبرة العالية
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-600 p-3 rounded-full text-white mr-4">
                    <FaBook size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-800">
                      تعلم بسرعتك الخاصة
                    </h3>
                    <p className="text-gray-600">
                      الوصول الكامل إلى المحتوى في أي وقت ومن أي مكان
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">
            <span className="border-b-4 border-green-500 pb-2">
              جميع الكورسات
            </span>
          </h2>
          <p className="text-green-600 font-medium">
            {filteredCourses.length} كورس متاح
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <FaBook className="mx-auto text-green-300" size={64} />
            <h3 className="text-2xl font-bold text-gray-600 mt-4">
              لا توجد كورسات متاحة
            </h3>
            <p className="text-gray-500">
              يرجى المحاولة مرة أخرى لاحقاً أو تغيير معايير البحث
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link
                to={`/shop/courses/${course._id}`}
                key={course._id}
                className="block"
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                  <div className="relative">
                    <img
                      src={`http://localhost:5000/${course.coursePicture}`}
                      alt={course.courseTitle}
                      className="w-full h-52 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/api/placeholder/400/250";
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {course.price} دينار
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-2">
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
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                        تفاصيل الكورس
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            ابدأ رحلتك التعليمية اليوم
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف الطلاب الذين يطورون مهاراتهم من خلال منصتنا التعليمية
          </p>
          <button className="bg-white text-green-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-50 transition duration-300">
            اشترك الآن
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} منصة التعلم الإلكترونية. جميع
            الحقوق محفوظة
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ShopCourses;
