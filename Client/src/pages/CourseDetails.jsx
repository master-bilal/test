import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  FaGraduationCap,
  FaUser,
  FaMoneyBillWave,
  FaPlay,
  FaClock,
  FaCalendarAlt,
} from "react-icons/fa";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:5000/api/shop/courses/${id}`
        );
        setCourse(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError("فشل في تحميل تفاصيل الكورس");
        setIsLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);
useEffect(() => {
  if (window.paypal && course) {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: course.price.toString(), // تأكد أن السعر هو رقم كنص
                  currency_code: "USD",
                },
                description: course.courseTitle,
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          try {
            const details = await actions.order.capture();
            alert("تم الدفع بنجاح");

            const response = await axios.post(
              "http://localhost:5000/api/payment",
             {
            withCredentials: true,
            // headers: { "Content-Type": "application/json" },
          },
              {
                courseId: course._id,
                courseTitle: course.courseTitle,
                amount: course.price,
                orderId: data.orderID,
                paymentDetails: details,
              }
            );

            console.log("✅ بيانات الدفع المحفوظة:", response.data);
          } catch (error) {
            console.error(
              "❌ خطأ أثناء حفظ الدفع:",
              error.response?.data || error.message
            );
          }

          // يمكنك التحديث بعد الدفع أو توجيه المستخدم
        },
      })
      .render("#paypal-button");
  }
}, [course]);



  const handlePayPalSuccess = (details, data) => {
    alert("تمت عملية الدفع بنجاح!");
    // يمكنك هنا إضافة المزيد من التعامل مع عملية الدفع مثل حفظ حالة الدفع أو التحديث في قاعدة البيانات
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative max-w-lg mx-auto">
          <strong className="font-bold">خطأ!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
        <Link
          to="/shop/courses"
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          العودة إلى قائمة الكورسات
        </Link>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-bold text-gray-600 mt-4">
          الكورس غير موجود
        </h3>
        <Link
          to="/shop/courses"
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          العودة إلى قائمة الكورسات
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      {/* Header Section */}
      <div className="bg-green-600 text-white py-12 px-6">
        <div className="container mx-auto">
          <Link
            to="/shop/courses"
            className="inline-flex items-center text-white hover:text-green-200 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            العودة إلى الكورسات
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {course.courseTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {course.courseDescription || "لا يوجد وصف تفصيلي لهذا الكورس"}
          </p>
        </div>
      </div>

      {/* Course Details Section */}
      <div className="container mx-auto py-8 px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Course Image */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src={`http://localhost:5000/${course.coursePicture}`}
                alt={course.courseTitle}
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/api/placeholder/800/400";
                }}
              />
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                وصف الكورس
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {course.courseDescription ||
                  "لا يوجد وصف تفصيلي متاح لهذا الكورس."}
              </p>
            </div>

            {/* Videos Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-green-800 mb-6">
                محتوى الكورس
              </h2>
              {course.videos && course.videos.length > 0 ? (
                <div className="space-y-4">
                  {course.videos.map((video) => (
                    <div
                      key={video._id}
                      className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                    >
                      <div className="flex items-center">
                        <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                          <FaPlay />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800">
                            {video.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {video.description || "لا يوجد وصف لهذا الفيديو"}
                          </p>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <FaClock className="ml-1" />
                          <span>--:--</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FaPlay className="mx-auto text-4xl mb-4 text-gray-300" />
                  <p>لا توجد فيديوهات متاحة لهذا الكورس حالياً</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              {/* Teacher Info */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  معلومات المدرس
                </h3>
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 mr-4">
                    <FaUser size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {course.teacher?.username || "مدرس غير معروف"}
                    </h4>
                    <p className="text-gray-600 text-sm">مدرس متخصص</p>
                  </div>
                </div>
              </div>

              {/* Course Info */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  معلومات الكورس
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
                      <FaMoneyBillWave size={16} />
                    </div>
                    <div>
                      <span className="text-gray-600">السعر: </span>
                      <span className="font-bold text-gray-800">
                        {course.price} دينار
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
                      <FaPlay size={16} />
                    </div>
                    <div>
                      <span className="text-gray-600">عدد الفيديوهات: </span>
                      <span className="font-bold text-gray-800">
                        {course.videos?.length || 0}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full text-green-600 mr-3">
                      <FaCalendarAlt size={16} />
                    </div>
                    <div>
                      <span className="text-gray-600">آخر تحديث: </span>
                      <span className="font-bold text-gray-800">
                        {new Date(course.updatedAt).toLocaleDateString("ar-EG")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PayPal Button */}
              <div id="paypal-button-container">
                <div id="paypal-button"></div>
              </div>

              {/* Purchase Button */}
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
                اشترك في الكورس
              </button>
            </div>
          </div>
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

export default CourseDetails;
