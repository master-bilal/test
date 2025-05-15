import { useState, useEffect, useRef } from "react";
import { UserCircle, PencilLine, Save, X, Upload, Mail } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );

        setUser(data);
        setFormData({
          username: data.username,
          email: data.email,
        });
        if (data.profilePicture) {
          setPreviewUrl(`http://localhost:5000/${data.profilePicture}`);
        }
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "فشل في جلب بيانات الملف الشخصي"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedFile(file);

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const uploadProfilePicture = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("profilePicture", selectedFile);

    try {
      const { data } = await axios.put(
        "http://localhost:5000/api/users/profile/picture",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUser({ ...user, profilePicture: data.profilePicture });
      setPreviewUrl(`http://localhost:5000/${data.profilePicture}`);
      setSelectedFile(null);
      toast.success("تم تحديث صورة الملف الشخصي بنجاح!");
    } catch (err) {
      console.error("Upload error:", err);
      toast.error(
        "فشل في تحميل صورة الملف الشخصي: " +
          (err.response?.data?.message || err.message || "خطأ غير معروف")
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:5000/api/users/profile",
        {
          username: formData.username,
          email: formData.email,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      setUser(response.data);
      setFormData({
        username: response.data.username,
        email: response.data.email,
      });
      setIsEditing(false);
      toast.success("تم تحديث الملف الشخصي بنجاح!");
    } catch (err) {
      console.error("Update error:", err);
      toast.error(
        "فشل في تحديث الملف الشخصي: " +
          (err.response?.data?.message || err.message || "خطأ غير معروف")
      );
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-green-600 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="bg-white p-8 rounded-lg shadow-lg" dir="rtl">
          <h2 className="text-xl font-bold text-red-600 mb-4 font-[Tajawal]">
            خطأ
          </h2>
          <p className="text-gray-700 font-[Tajawal]">{error}</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="bg-white p-8 rounded-lg shadow-lg" dir="rtl">
          <h2 className="text-xl font-bold text-gray-900 mb-4 font-[Tajawal]">
            غير مصرح لك
          </h2>
          <p className="text-gray-700 font-[Tajawal]">
            الرجاء تسجيل الدخول لعرض ملفك الشخصي
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white mt-16">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-12 font-[Tajawal]" dir="rtl">
        <div className="mb-12 text-center">
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center overflow-hidden bg-green-100 border-4 border-green-500">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="الصورة الشخصية"
                className="w-full h-full object-cover"
              />
            ) : (
              <UserCircle className="w-20 h-20 text-green-600" />
            )}
            {isEditing && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100"
                >
                  <Upload className="w-5 h-5 text-green-800" />
                </button>
              </div>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
          {selectedFile && isEditing && (
            <div className="flex justify-center gap-4 mb-4">
              <button
                onClick={uploadProfilePicture}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
              >
                حفظ الصورة
              </button>
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setPreviewUrl(
                    user.profilePicture
                      ? `http://localhost:5000/${user.profilePicture}`
                      : null
                  );
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium"
              >
                إلغاء
              </button>
            </div>
          )}
          <h1 className="text-3xl font-bold text-green-800">
            مرحباً بعودتك, {user.username}!
          </h1>
          <p className="text-green-600 mt-2">إدارة معلومات ملفك الشخصي</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-r-4 border-green-500">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-green-800">
                معلومات الملف الشخصي
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isEditing
                    ? "bg-red-50 text-red-600 hover:bg-red-100"
                    : "bg-green-50 text-green-600 hover:bg-green-100"
                }`}
              >
                {isEditing ? (
                  <>
                    <span>إلغاء</span>
                    <X className="w-4 h-4 mr-2" />
                  </>
                ) : (
                  <>
                    <span>تعديل الملف</span>
                    <PencilLine className="w-4 h-4 mr-2" />
                  </>
                )}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="flex items-center text-sm font-medium text-green-700 mb-2">
                  <UserCircle className="w-5 h-5 ml-2" />
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-lg bg-green-50 border-green-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-60"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-green-700 mb-2">
                  <Mail className="w-5 h-5 ml-2" />
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-lg bg-green-50 border-green-200 focus:ring-2 focus:ring-green-500 focus:border-green-500 disabled:opacity-60"
                />
              </div>

              {isEditing && (
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="flex items-center px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-200 transform hover:scale-105"
                  >
                    <Save className="w-4 h-4 ml-2" />
                    <span>حفظ التغييرات</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
