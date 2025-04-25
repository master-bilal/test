import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:5000/api/courses")
    .then((res) => {
      console.log("🚀 Data from backend:", res.data); // اطبع البيانات هون
      setCourses(Array.isArray(res.data) ? res.data : []);
    })
    .catch((err) => console.error(err));
}, []);

  return (
    <div className="p-6">
      {Array.isArray(courses) && courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">لا يوجد كورسات حاليًا.</p>
      )}
    </div>
  );
};

export default CoursesPage;
