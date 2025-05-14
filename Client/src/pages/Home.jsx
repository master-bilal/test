import {
  BookOpen,
  Video,
  Award,
  BookText,
  Users,
  ChevronDown,
} from "lucide-react";

const Home = () => {
  return (
    <>
      <div className="font-[Tajawal] text-right" dir="rtl">
        {/* تضمين خط Tajwal */}
        <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
    `}</style>

        {/* القسم الرئيسي (Hero Section) */}
        <section className="pt-32 pb-16 md:py-40 bg-gradient-to-r from-green-800 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              الإجازة بالقرآن الكريم
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              احصل على إجازة في القراءات القرآنية من خلال نخبة من المشايخ
              المتخصصين وبطرق حديثة تجمع بين الأصالة والمعاصرة
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-white text-green-700 font-bold rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                ابدأ رحلتك مع القرآن
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors duration-300"
              >
                تعرف على دوراتنا
              </a>
            </div>
          </div>
        </section>

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
