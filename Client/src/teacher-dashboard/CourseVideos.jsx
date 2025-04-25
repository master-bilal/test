import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CourseVideos = () => {
  const { courseId } = useParams(); // للحصول على ID الكورس من الرابط
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب الفيديوهات الخاصة بالكورس
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/courses/${courseId}/videos`,
          {
            withCredentials: true, // علشان يبعت الكوكي
          }
        );
        setVideos(res.data);
        setLoading(false);
      } catch (err) {
        console.error("فشل في جلب الفيديوهات:", err);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [courseId]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">فيديوهات الكورس</h1>
        <Link
          to={`/teacher-dashboard/TeacherCourses/${courseId}/add-video`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + إضافة فيديو جديد
        </Link>
      </div>

      {loading ? (
        <p>جاري تحميل الفيديوهات...</p>
      ) : videos.length === 0 ? (
        <p>لا توجد فيديوهات لهذا الكورس بعد.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video._id}
              className="bg-white shadow-md rounded p-4 border border-gray-200"
            >
              <h2 className="text-lg font-semibold">{video.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{video.description}</p>
              <video className="w-full h-40 object-cover rounded mb-4" controls>
                <source
                  src={`http://localhost:5000/${video.videoUrl}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <Link
                to={`/teacher-dashboard/TeacherCourses/${courseId}/edit-video/${video._id}`}
                className="text-blue-600 hover:underline text-sm mr-2"
              >
                تعديل الفيديو
              </Link>
              <button className="text-red-600 hover:underline text-sm">
                حذف الفيديو
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseVideos;
