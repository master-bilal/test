import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

// تعريف الـ schema باستخدام Yup
const schema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  email: yup
    .string()
    .email("بريد إلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  password: yup
    .string()
    .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل")
    .matches(/[A-Z]/, "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل")
    .matches(/[a-z]/, "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل")
    .matches(/[0-9]/, "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل")
    .matches(
      /[^A-Za-z0-9]/,
      "يجب أن تحتوي كلمة المرور على حرف خاص واحد على الأقل"
    )
    .required("كلمة المرور مطلوبة"),
});

export default function Register() {
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { updateRole } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const password = watch("password", "");
  const passwordStrength = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // إرسال البيانات إلى الخادم
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        { withCredentials: true }
      );

      const userRole = response.data.role || "user";

      updateRole(userRole);

      localStorage.setItem("userRole", userRole);

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "مرحباً!",
        text: "تم إنشاء حسابك بنجاح.",
        confirmButtonText: "متابعة",
        customClass: {
          confirmButton: "bg-green-500 text-white px-4 py-2 rounded-lg",
        },
      }).then(() => {
        // Navigate after signup
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "فشل التسجيل",
        text: error.response?.data?.message || error.message,
        confirmButtonText: "حاول مرة أخرى",
        customClass: {
          confirmButton: "bg-green-500 text-white px-4 py-2 rounded-lg",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Import Tajawal font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
      `}</style>

      {/* Left Section */}
      <div className="md:w-1/2 bg-gradient-to-br from-green-500 to-green-700 p-8 flex items-center justify-center">
        <div className="max-w-md text-white font-[Tajawal]" dir="rtl">
          <h1 className="text-5xl font-bold mb-6">انضم إلينا!</h1>
          <p className="text-lg opacity-90">
            قم بإنشاء حسابك لإدارة المهام، وتتبع التقدم، والتعاون مع فريقك.
          </p>
          <div className="mt-12 space-y-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">وصول آمن</h3>
                <p className="text-sm opacity-75">
                  بياناتك محمية بأمان على مستوى المؤسسات
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">سريع كالبرق</h3>
                <p className="text-sm opacity-75">محسّن للسرعة والأداء</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 font-[Tajawal]" dir="rtl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              إنشاء حساب جديد
            </h2>
            <p className="mt-2 text-gray-600">أدخل بياناتك أدناه</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            {/* حقل الاسم الكامل */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  {...register("name")}
                  className="w-full px-4 h-12 peer border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-green-500 focus:outline-none"
                  placeholder="الاسم"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="absolute right-4 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-green-500"
                >
                  الاسم
                </label>
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* حقل البريد الإلكتروني */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-4 h-12 peer border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-green-500 focus:outline-none"
                  placeholder="البريد الإلكتروني"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="absolute right-4 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-green-500"
                >
                  البريد الإلكتروني
                </label>
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* حقل كلمة المرور */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="w-full px-4 h-12 peer border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-green-500 focus:outline-none"
                  placeholder="كلمة المرور"
                  id="password"
                  onFocus={() => setIsFocused(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setIsFocused(false);
                    }
                  }}
                />
                <label
                  htmlFor="password"
                  className="absolute right-4 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-green-500"
                >
                  كلمة المرور
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

              {/* قوة كلمة المرور */}
              <div className="mt-4 overflow-hidden">
                <div
                  className={`space-y-2 transition-all duration-300 ease-in-out ${
                    isFocused ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    maxHeight: isFocused ? "200px" : "0",
                    transition:
                      "max-height 300ms ease-in-out, opacity 300ms ease-in-out",
                  }}
                >
                  {Object.entries(passwordStrength).map(
                    ([key, value], index) => (
                      <div
                        key={key}
                        className="flex items-center space-x-2 space-x-reverse"
                        style={{
                          opacity: isFocused ? 1 : 0,
                          transition: `opacity 300ms ease-in-out ${
                            index * 50
                          }ms`,
                        }}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 transition-colors duration-300 ${
                            value ? "text-green-500" : "text-gray-300"
                          }`}
                        />
                        <span
                          className={`text-sm transition-colors duration-300 ${
                            value ? "text-green-500" : "text-gray-500"
                          }`}
                        >
                          {key === "length" && "الطول: 8 أحرف على الأقل"}
                          {key === "uppercase" && "حرف كبير واحد على الأقل"}
                          {key === "lowercase" && "حرف صغير واحد على الأقل"}
                          {key === "number" && "رقم واحد على الأقل"}
                          {key === "special" && "حرف خاص واحد على الأقل"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* الأزرار */}
            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google logo"
                  className="w-5 h-5 ml-2"
                />
                المتابعة باستخدام Google
              </button>
            </div>
          </form>

          {/* رابط تسجيل الدخول */}
          <p className="text-center text-sm text-gray-600">
            لديك حساب بالفعل؟{" "}
            <Link
              to="/login"
              className="font-medium text-green-600 hover:text-green-700"
            >
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
