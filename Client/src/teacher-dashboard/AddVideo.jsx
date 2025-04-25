import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const AddVideo = () => {
  const { courseId } = useParams(); // للحصول على ID الكورس من الرابط
  const navigate = useNavigate(); // لاستخدام التنقل بعد إضافة الفيديو
  const [videoFile, setVideoFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("title", title);
    formData.append("description", description);

    try {
      const res = await axios.post(
        `http://localhost:5000/api/courses/${courseId}/videos`,
        formData,
        {
          withCredentials: true, // علشان يبعت الكوكي
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate(`/teacher-dashboard/TeacherCourses/${courseId}/videos`); // بعد إضافة الفيديو نرجع لصفحة الفيديوهات
    } catch (err) {
      console.error("فشل في إضافة الفيديو:", err);
      setError("حدث خطأ أثناء إضافة الفيديو.");
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">إضافة فيديو جديد</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            العنوان
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="description"
          >
            الوصف
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="video">
            اختر الفيديو
          </label>
          <input
            type="file"
            id="video"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
            accept="video/*"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "جاري التحميل..." : "إضافة الفيديو"}
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
