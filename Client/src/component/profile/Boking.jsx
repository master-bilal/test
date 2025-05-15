import React, { useEffect, useState } from "react";
import {
  Loader2,
  AlertCircle,
  CalendarCheck,
  Clock3,
  Video,
} from "lucide-react";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/teacher/my-bookings",
          {
            credentials: "include",
          }
        );
        if (!res.ok) {
          throw new Error("Failed to fetch bookings");
        }
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-40 text-blue-600">
        <Loader2 className="animate-spin w-6 h-6 mr-2" />
        Loading bookings...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-40 text-red-600">
        <AlertCircle className="w-6 h-6 mr-2" />
        <span>Error: {error}</span>
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Your Bookings
      </h2>
      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid gap-4">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="p-4 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
            >
              <p className="font-medium text-gray-700 mb-1">
                <CalendarCheck className="inline-block w-5 h-5 text-green-500 mr-1" />
                <strong>Teacher:</strong> {booking.teacherId?.name || "N/A"}
              </p>
              <p className="text-gray-600">
                <CalendarCheck className="inline-block w-5 h-5 text-blue-500 mr-1" />
                <strong>Date:</strong> {booking.availabilityId?.date || "N/A"}
              </p>
              <p className="text-gray-600">
                <Clock3 className="inline-block w-5 h-5 text-purple-500 mr-1" />
                <strong>Time:</strong> {booking.availabilityId?.startTime} -{" "}
                {booking.availabilityId?.endTime}
              </p>
              <p className="mt-2">
                <Video className="inline-block w-5 h-5 text-red-500 mr-1" />
                <strong>Meeting:</strong>{" "}
                {booking.availabilityId?.meetingUrl ? (
                  <a
                    href={booking.availabilityId?.meetingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded text-sm transition"
                  >
                    Join Meeting
                  </a>
                ) : (
                  <span className="text-gray-500">Not available</span>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
