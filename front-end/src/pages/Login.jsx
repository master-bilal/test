import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Eye, EyeOff } from "lucide-react";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("بريد إلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  password: yup.string().required("كلمة المرور مطلوبة"),
});

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleForgotPassword = async () => {
    const { value: email } = await Swal.fire({
      title: "إعادة تعيين كلمة المرور",
      input: "email",
      inputLabel: "أدخل عنوان بريدك الإلكتروني",
      inputPlaceholder: "بريدك الإلكتروني",
      showCancelButton: true,
      confirmButtonText: "إرسال رمز إعادة التعيين",
      inputValidator: (value) => {
        if (!value) {
          return "تحتاج إلى إدخال بريدك الإلكتروني!";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "الرجاء إدخال عنوان بريد إلكتروني صالح!";
        }
      },
    });

    if (email) {
      try {
        // Implement your backend logic for sending reset password email here
        Swal.fire({
          icon: "success",
          title: "تم إرسال البريد الإلكتروني!",
          text: "تم إرسال رمز إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: error.message,
        });
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      // Implement your backend logic for Google Sign-In here
      Swal.fire({
        icon: "success",
        title: "تم تسجيل الدخول بنجاح!",
        text: `مرحبًا بعودتك!`,
        confirmButtonText: "موافق",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "فشل تسجيل الدخول بحساب Google",
        text: error.message,
        confirmButtonText: "حاول مرة أخرى",
      });
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        data,
        {
          withCredentials: true, // تأكد من إرسال الكوكيز مع الطلب
        }
      );
      // console.log("bilal");
      Swal.fire({
        icon: "success",
        title: "تم تسجيل الدخول بنجاح!",
        text: `مرحبًا بعودتك!`,
        confirmButtonText: "موافق",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "فشل تسجيل الدخول",
        text: error.response?.data?.message || "حدث خطأ",
        confirmButtonText: "حاول مرة أخرى",
      });
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
          <h1 className="text-5xl font-bold mb-6">مرحبًا بعودتك!</h1>
          <p className="text-lg opacity-90">
            قم بتسجيل الدخول إلى حسابك لإدارة المهام، وتتبع التقدم، والتعاون مع
            فريقك.
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
              تسجيل الدخول إلى حسابك
            </h2>
            <p className="mt-2 text-gray-600">أدخل بياناتك أدناه</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            <div className="space-y-4">
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

              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className="w-full px-4 h-12 peer border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-green-500 focus:outline-none"
                    placeholder="كلمة المرور"
                    id="password"
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
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-green-600 hover:text-green-700"
              >
                نسيت كلمة المرور؟
              </button>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-green-500 focus:ring-green-500 border-gray-300 rounded"
                  id="remember-me"
                />
                <label
                  htmlFor="remember-me"
                  className="mr-2 text-sm text-gray-600"
                >
                  تذكرني
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </button>

              <button
                type="button"
                onClick={handleGoogleSignIn}
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

          <p className="text-center text-sm text-gray-600">
            ليس لديك حساب؟{" "}
            <Link
              to="/signup"
              className="font-medium text-green-600 hover:text-green-700"
            >
              إنشاء حساب
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
