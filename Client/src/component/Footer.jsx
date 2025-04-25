import { BookOpen, Phone } from "lucide-react";

const QuranFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 font-[Tajawal]" dir="rtl">
      {/* تضمين خط Tajwal */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
      `}</style>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* القسم الأول: معلومات عن الموقع */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center ml-3">
                <BookOpen className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold">دار الإجازة للقرآن الكريم</h3>
            </div>
            <p className="text-gray-400 mb-4">
              منصة تعليمية متخصصة في تعليم القرآن الكريم وعلومه عن بعد مع نخبة
              من المشايخ والمقرئين.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {/* أيقونات مواقع التواصل الاجتماعي */}
              {[
                { name: "facebook", icon: "fab fa-facebook-f" },
                { name: "twitter", icon: "fab fa-twitter" },
                { name: "instagram", icon: "fab fa-instagram" },
                { name: "youtube", icon: "fab fa-youtube" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* القسم الثاني: روابط سريعة */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {[
                "الرئيسية",
                "عن الدار",
                "الدورات",
                "الإجازات",
                "أسئلة شائعة",
                "تواصل معنا",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* القسم الثالث: التصنيفات */}
          <div>
            <h3 className="text-lg font-bold mb-4">التصنيفات</h3>
            <ul className="space-y-2">
              {[
                "تحسين التلاوة",
                "علم التجويد",
                "القراءات العشر",
                "علوم القرآن",
                "حفظ القرآن",
                "الإجازات",
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* القسم الرابع: تواصل معنا */}
          <div>
            <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 ml-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-400">
                  المملكة العربية السعودية، الرياض
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="ml-3 text-green-500" />
                <span className="text-gray-400">+966 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 ml-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">info@quranacademy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* شريط حقوق النشر */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            جميع الحقوق محفوظة © {new Date().getFullYear()} دار الإجازة للقرآن
            الكريم
          </p>
        </div>
      </div>
    </footer>
  );
};

export default QuranFooter;
