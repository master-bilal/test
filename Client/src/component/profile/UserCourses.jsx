import React, { useEffect, useState } from "react";
import axios from "axios";

const UserCourses = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/bookings/my-bookings",
        {
          withCredentials: true,
        }
      );
      setBookings(res.data);
    } catch (err) {
      console.error("Error fetching user bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserBookings();
  }, []);

  if (loading)
    return <p className="text-center mt-6">Loading your courses...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Booked Courses</h1>
      {bookings.length === 0 ? (
        <p className="text-gray-500">You haven’t booked any courses yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border"
            >
              <img
                src={`http://localhost:5000/${booking.course.coursePicture.replace(
                  /\\/g,
                  "/"
                )}`}
                alt={booking.course.courseTitle}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#286485]">
                  {booking.course.courseTitle}
                </h2>
                <p className="text-gray-600 mt-2">
                  {booking.course.courseDescription}
                </p>
                <p className="mt-3 text-sm text-gray-500">
                  <strong>Price:</strong> ${booking.price.toFixed(2)}
                </p>

                <p className="text-sm text-gray-500">
                  <strong>Booked At:</strong>{" "}
                  {new Date(booking.bookedAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCourses;
