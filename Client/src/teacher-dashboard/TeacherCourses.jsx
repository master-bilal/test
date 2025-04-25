// src/pages/TeacherCourses.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TeacherCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/courses/my-courses",
          {
            withCredentials: true, // علشان يبعت الكوكي
          }
        );
        console.log(res.data); // تحقق من البيانات

        setCourses(res.data);
      } catch (err) {
        console.error("فشل في جلب الكورسات:", err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">كورساتي</h1>
        <Link
          to="/teacher/create-course"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + إنشاء كورس جديد
        </Link>
      </div>

      {courses.length === 0 ? (
        <p>لا يوجد كورسات بعد.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white shadow-md rounded p-4 border border-gray-200"
            >
              {course.coursePicture && (
                <img
                  src={`http://localhost:5000/${course.coursePicture}`}
                  alt={course.courseTitle}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-lg font-semibold">{course.courseTitle}</h2>
              <p className="text-gray-600 text-sm mb-2">
                {course.courseDescription}
              </p>
              <Link
                to={`/teacher/course/${course._id}`}
                className="text-blue-600 hover:underline text-sm"
              >
                عرض التفاصيل
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeacherCourses;
