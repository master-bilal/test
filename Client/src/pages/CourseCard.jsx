import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="border rounded p-4 shadow-md bg-white">
      <img
        src={course.coursePicture || "/default.jpg"}
        alt={course.courseTitle}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{course.courseTitle}</h2>
      <p className="text-gray-700 mt-1">
        {course.courseDescription.substring(0, 100)}...
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Instructor: {course.teacher?.username}
      </p>
    </div>
  );
};

export default CourseCard;
