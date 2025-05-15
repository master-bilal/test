import {
  BookOpen,
  Video,
  Award,
  BookText,
  Users,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";
import image from "../images/with construction.jpg";

const Home = () => {
  const [stats, setStats] = useState({
    students: 25067,
    courses: 691,
    hours: 5940,
    graduateStudents: 960,
  });
  return (
    <>
      <div className=" text-right" dir="rtl">
        {/* تضمين خط Tajwal */}

        <div className="relative w-full h-screen bg-black text-white overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url(${image})`,
              filter: "brightness(0.4)",
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
            {/* Logo */}
            <div className="absolute top-6 right-6">
              <div className="text-green-600 text-4xl font-bold">
                <svg viewBox="0 0 50 50" className="w-16 h-16">
                  <path
                    fill="currentColor"
                    d="M25,2 L2,25 L25,48 L48,25 L25,2 Z M25,10 L40,25 L25,40 L10,25 L25,10 Z"
                  />
                </svg>
              </div>
            </div>

            {/* Main Heading - Arabic Text */}
            <h1
              className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
              dir="rtl"
            >
              <span className="block">الفرقان منصة رقمية لتعليم</span>
              <span className="block">علوم القرآن الكريم</span>
            </h1>

            {/* Subheading - Arabic Text */}
            <p className="text-lg md:text-xl max-w-3xl mb-8 mt-4" dir="rtl">
              منصة تعليمية تفاعلية متكاملة ذات بيئة آمنة تهدف إلى تقريب أهل
              القرآن على بُعد أقطارهم من معلمين ومتعلمين.
            </p>

            {/* Subscribe/Join Button */}
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-md text-lg transition duration-300 mt-4">
              اشترك الآن
            </button>

            {/* Stats Section */}
            <div className="absolute bottom-10 left-0 right-0">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mx-auto max-w-5xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {/* Students Count */}
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">
                      {stats.students}
                    </span>
                    <span className="text-sm text-white mt-1" dir="rtl">
                      عدد طلاب المنصة
                    </span>
                    <div className="mt-2">
                      <svg
                        className="w-8 h-8 text-yellow-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,5 C7,5 2,7 2,10 L2,19 C2,20.1 2.9,21 4,21 L6,21 C7.1,21 8,20.1 8,19 L8,17 L16,17 L16,19 C16,20.1 16.9,21 18,21 L20,21 C21.1,21 22,20.1 22,19 L22,10 C22,7 17,5 12,5 Z"
                        />
                        <path
                          fill="currentColor"
                          d="M12,3 C7.59,3 4,4.79 4,7 C4,9.21 7.59,11 12,11 C16.41,11 20,9.21 20,7 C20,4.79 16.41,3 12,3 Z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Study Hours */}
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">
                      {stats.hours}
                    </span>
                    <span className="text-sm text-white mt-1" dir="rtl">
                      عدد الساعات الدراسية
                    </span>
                    <div className="mt-2">
                      <svg
                        className="w-8 h-8 text-yellow-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,2 C6.5,2 2,6.5 2,12 C2,17.5 6.5,22 12,22 C17.5,22 22,17.5 22,12 C22,6.5 17.5,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z"
                        />
                        <path
                          fill="currentColor"
                          d="M12.5,7 L11,7 L11,13 L16.25,16.15 L17,14.92 L12.5,12.25 L12.5,7 Z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Programs Count */}
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">
                      {stats.courses}
                    </span>
                    <span className="text-sm text-white mt-1" dir="rtl">
                      عدد البرامج
                    </span>
                    <div className="mt-2">
                      <svg
                        className="w-8 h-8 text-yellow-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M20,4 L4,4 C2.9,4 2,4.9 2,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 Z M20,18 L4,18 L4,6 L20,6 L20,18 Z"
                        />
                        <path
                          fill="currentColor"
                          d="M11,17 L13,17 L13,15 L11,15 L11,17 Z M14,10 C14,10.55 13.55,11 13,11 L11,11 C10.45,11 10,10.55 10,10 L10,8 C10,7.45 10.45,7 11,7 L13,7 C13.55,7 14,7.45 14,8 L14,10 Z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Graduate Students */}
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white">
                      {stats.graduateStudents}
                    </span>
                    <span className="text-sm text-white mt-1" dir="rtl">
                      عدد طلاب المقررات الإلكترونية
                    </span>
                    <div className="mt-2">
                      <svg
                        className="w-8 h-8 text-yellow-500"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,3 L1,9 L12,15 L21,10.09 L21,17 L23,17 L23,9 L12,3 Z M5,13.18 L5,17.18 L12,21 L19,17.18 L19,13.18 L12,17 L5,13.18 Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم المميزات */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ما يميزنا
              </h2>
              <div className="h-1 w-20 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <BookOpen size={32} />,
                  title: "الإجازة بالقرآن",
                  desc: "إجازات معتمدة بالأسانيد المتصلة للقراءات القرآنية",
                },
                {
                  icon: <Video size={32} />,
                  title: "تعليم عن بعد",
                  desc: "دروس مباشرة عبر الإنترنت مع أفضل المشايخ والمقرئين",
                },
                {
                  icon: <Award size={32} />,
                  title: "شهادات معتمدة",
                  desc: "شهادات معتمدة من كبرى المؤسسات القرآنية حول العالم",
                },
                {
                  icon: <BookText size={32} />,
                  title: "اختبارات إلكترونية",
                  desc: "نظام اختبارات متكامل لقياس مستوى الطلاب وتقييمهم",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 text-green-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* قسم الدورات */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                الدورات المتاحة
              </h2>
              <div className="h-1 w-20 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "تحسين التلاوة",
                  level: "مبتدئ",
                  students: 120,
                  lessons: 16,
                },
                {
                  title: "أحكام التجويد",
                  level: "متوسط",
                  students: 85,
                  lessons: 24,
                },
                {
                  title: "إجازة برواية حفص",
                  level: "متقدم",
                  students: 64,
                  lessons: 32,
                },
              ].map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-48 bg-green-600 flex items-center justify-center">
                    <img
                      src={`/api/placeholder/400/200`}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        {course.level}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users size={16} className="ml-1" />
                        <span>{course.students} طالب</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {course.title}
                    </h3>
                    <div className="mb-4 text-gray-600">
                      <div className="flex items-center mb-2">
                        <BookText size={16} className="ml-2" />
                        <span>{course.lessons} درساً</span>
                      </div>
                      <div className="flex items-center">
                        <Video size={16} className="ml-2" />
                        <span>دروس مباشرة أونلاين</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="block w-full py-2 text-center bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
                    >
                      تسجيل في الدورة
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-green-600 text-green-600 font-bold rounded-md hover:bg-green-50 transition-colors duration-300"
              >
                عرض جميع الدورات
                <ChevronDown size={16} className="mr-2" />
              </a>
            </div>
          </div>
        </section>

        {/* قسم المدرسين */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                نخبة من المعلمين والمقرئين
              </h2>
              <div className="h-1 w-20 bg-green-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "الشيخ عبد الرحمن العوسي",
                  role: "استاذ القراءات العشر",
                },
                { name: "الشيخ محمد الحافظ", role: "مجاز بالقراءات السبع" },
                { name: "الشيخة نور القرشي", role: "استاذة التجويد" },
                { name: "الشيخ أحمد المكي", role: "حافظ ومجاز بالعشر الصغرى" },
              ].map((teacher, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={`/api/placeholder/150/150`}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {teacher.name}
                  </h3>
                  <p className="text-green-600">{teacher.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* قسم الشهادات والاختبارات */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  شهادات معتمدة واختبارات احترافية
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  حصول الطالب على شهادة تثبت مستواه وإتقانه للقرآن الكريم
                  وعلومه. نقدم اختبارات إلكترونية متطورة ومقابلات عبر الفيديو مع
                  المشايخ المتخصصين.
                </p>
                <div className="space-y-4">
                  {[
                    "اختبارات إلكترونية تفاعلية",
                    "مقابلات مباشرة مع المشايخ",
                    "شهادات معتمدة من المؤسسات القرآنية",
                    "إمكانية الحصول على الإجازة عن بعد",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center ml-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition-colors duration-300"
                  >
                    التقدم للاختبار
                  </a>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/api/placeholder/500/400"
                  alt="الشهادات والاختبارات"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* قسم الإحصائيات */}
        <section className="py-12 bg-green-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { count: "+5000", label: "طالب وطالبة" },
                { count: "+50", label: "معلم ومقرئ" },
                { count: "+100", label: "دورة تعليمية" },
                { count: "+1000", label: "شهادة ممنوحة" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <h3 className="text-4xl font-bold mb-2">{stat.count}</h3>
                  <p className="text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* قسم انضم إلى طلابنا - القسم الجديد */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-green-50 rounded-lg p-8 shadow-lg text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                كن أحد طلابنا المميزين
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                انضم إلى مجتمعنا التعليمي واحصل على فرصة التعلم على يد نخبة من
                المشايخ والمقرئين. سجل دخولك الآن أو أنشئ حساباً جديداً لبدء
                رحلتك مع القرآن الكريم وعلومه.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a
                  href="/login"
                  className="px-8 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  تسجيل الدخول
                </a>
                <a
                  href="/signup"
                  className="px-8 py-3 bg-white border-2 border-green-600 text-green-600 font-bold rounded-md hover:bg-green-50 transition-colors duration-300"
                >
                  إنشاء حساب جديد
                </a>
              </div>
              <div className="mt-8 text-gray-500">
                <p>
                  لديك سؤال؟{" "}
                  <a
                    href="/contactus"
                    className="text-green-600 hover:underline"
                  >
                    تواصل معنا
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
