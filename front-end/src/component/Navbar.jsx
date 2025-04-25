import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Image from "../images/Logo.png";

// مكون وهمي لتعويض مساحة الناف بار
export const NavbarSpacer = () => {
  return <div className="h-16 md:h-20"></div>;
};

// المكون الرئيسي للناف بار
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token && token.trim() !== "") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
        }`}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
        `}</style>

        <div
          className="container mx-auto px-4 flex justify-between items-center font-[Tajawal]"
          dir="rtl"
        >
          {/* الشعار */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={Image}
                alt="دار الإجازة للقرآن الكريم"
                className="h-12 object-contain"
              />
            </Link>
          </div>

          {/* قائمة الروابط للشاشات الكبيرة */}
          <nav className="hidden md:block">
            <ul className="flex">
              {[
                { name: "الرئيسية", path: "/" },
                { name: "عن الدار", path: "/aboutus" },
                { name: "الإجازات", path: "/ijazat" },
                { name: "الدورات", path: "/courses" },
                { name: "الاختبارات", path: "/exams" },
                { name: "المعلمون", path: "/teachers" },
                { name: "المدونة", path: "/blog" },
                { name: "تواصل معنا", path: "/contactus" },
              ].map((item) => (
                <li key={item.name} className="mx-4">
                  <Link
                    to={item.path}
                    className="text-gray-800 hover:text-green-600 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* أزرار تسجيل الدخول/الخروج */}
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <>
                <Link
                  to="/profile"
                  className="mx-2 px-4 py-2 text-green-600 font-medium border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  الملف الشخصي
                </Link>
                <button
                  onClick={handleLogout}
                  className="mx-2 px-4 py-2 text-white font-medium bg-red-600 border-2 border-red-600 rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  تسجيل الخروج
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="mx-2 px-4 py-2 text-green-600 font-medium border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/signup"
                  className="mx-2 px-4 py-2 text-white font-medium bg-green-600 border-2 border-green-600 rounded-md hover:bg-green-700 transition-colors duration-300"
                >
                  التسجيل
                </Link>
              </>
            )}
          </div>

          {/* زر القائمة للشاشات الصغيرة */}
          <button
            className="block md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* قائمة الجوال */}
        {isMenuOpen && (
          <div
            className="md:hidden bg-white shadow-lg py-4 font-[Tajawal]"
            dir="rtl"
          >
            <nav className="container mx-auto px-4">
              <ul className="space-y-3">
                {[
                  { name: "الرئيسية", path: "/" },
                  { name: "عن الدار", path: "/about" },
                  { name: "الإجازات", path: "/ijazat" },
                  { name: "الدورات", path: "/courses" },
                  { name: "الاختبارات", path: "/exams" },
                  { name: "المعلمون", path: "/teachers" },
                  { name: "المدونة", path: "/blog" },
                  { name: "تواصل معنا", path: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="block py-2 text-gray-800 hover:text-green-600 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}

                <div className="flex flex-col pt-3 border-t border-gray-200">
                  {isLoggedIn ? (
                    <>
                      <Link
                        to="/profile"
                        className="py-2 my-1 text-center text-green-600 font-medium border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
                      >
                        الملف الشخصي
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="py-2 my-1 text-center text-white font-medium bg-red-600 border-2 border-red-600 rounded-md hover:bg-red-700 transition-colors duration-300"
                      >
                        تسجيل الخروج
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="py-2 my-1 text-center text-green-600 font-medium border-2 border-green-600 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300"
                      >
                        تسجيل الدخول
                      </Link>
                      <Link
                        to="/signup"
                        className="py-2 my-1 text-center text-white font-medium bg-green-600 border-2 border-green-600 rounded-md hover:bg-green-700 transition-colors duration-300"
                      >
                        التسجيل
                      </Link>
                    </>
                  )}
                </div>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

// التصدير الرئيسي
export default Navbar;
