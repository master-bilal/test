import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CourseVideos = () => {
  const { courseId } = useParams(); // get course ID from URL
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/courses/${courseId}/videos`,
          {
            withCredentials: true,
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
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">فيديوهات الكورس</h1>
        <Link
          to={`/teacher-dashboard/TeacherCourses/${courseId}/add-video`}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + إضافة فيديو جديد
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-700">جاري تحميل الفيديوهات...</p>
      ) : videos.length === 0 ? (
        <p className="text-gray-700">لا توجد فيديوهات لهذا الكورس بعد.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video._id}
              className="bg-white shadow-md rounded-2xl p-5 border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                {video.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{video.description}</p>
              <video
                className="w-full h-40 object-cover rounded-lg mb-4"
                controls
                preload="metadata"
              >
                <source
                  src={`http://localhost:5000/${video.videoUrl}`}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="flex items-center justify-between">
                <Link
                  to={`/teacher-dashboard/TeacherCourses/${courseId}/edit-video/${video._id}`}
                  className="text-blue-600 hover:underline text-sm"
                >
                  تعديل الفيديو
                </Link>
                <button className="text-red-600 hover:underline text-sm">
                  حذف الفيديو
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseVideos;
