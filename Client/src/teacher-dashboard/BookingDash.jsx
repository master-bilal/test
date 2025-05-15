import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  Plus,
  Trash2,
  Calendar as CalendarIcon,
  CheckCircle,
  XCircle,
  Link,
} from "lucide-react";
import axios from "axios";

const AvailabilityTeacher = () => {
  const [availabilities, setAvailabilities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newAvailability, setNewAvailability] = useState({
    date: "",
    startTime: "",
    endTime: "",
    meetingUrl: "",
  });

  const fetchAvailabilities = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:5000/api/teacher/availabilities",
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setAvailabilities(response.data);
      setError(null);
    } catch (err) {
      setError("فشل في تحميل المواعيد، حاول مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAvailability({ ...newAvailability, [name]: value });
  };

  const addAvailability = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/teacher/availabilities",
        newAvailability,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setNewAvailability({
        date: "",
        startTime: "",
        endTime: "",
        meetingUrl: "",
      });
      fetchAvailabilities();
    } catch (err) {
      setError("فشل في إضافة الموعد، حاول مرة أخرى.");
    }
  };

  const deleteAvailability = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/teacher/availabilities/${id}`,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      fetchAvailabilities();
    } catch (err) {
      setError("فشل في حذف الموعد، حاول مرة أخرى.");
    }
  };

  useEffect(() => {
    fetchAvailabilities();
  }, []);

  const groupedAvailabilities = availabilities.reduce((acc, availability) => {
    const date = availability.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(availability);
    return acc;
  }, {});

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
          <CalendarIcon className="mr-2" size={24} />
          لوحة مواعيد المعلم
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white p-6 rounded-2xl shadow mb-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            <Plus size={20} className="mr-2" />
            إضافة موعد جديد
          </h3>
          <form onSubmit={addAvailability} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Calendar
                  className="absolute top-3 left-3 text-gray-400"
                  size={16}
                />
                <input
                  type="date"
                  name="date"
                  value={newAvailability.date}
                  onChange={handleInputChange}
                  className="border rounded-lg pl-10 p-2 w-full"
                  required
                />
              </div>
              <div className="flex-1 relative">
                <Clock
                  className="absolute top-3 left-3 text-gray-400"
                  size={16}
                />
                <input
                  type="time"
                  name="startTime"
                  value={newAvailability.startTime}
                  onChange={handleInputChange}
                  className="border rounded-lg pl-10 p-2 w-full"
                  required
                />
              </div>
              <div className="flex-1 relative">
                <Clock
                  className="absolute top-3 left-3 text-gray-400"
                  size={16}
                />
                <input
                  type="time"
                  name="endTime"
                  value={newAvailability.endTime}
                  onChange={handleInputChange}
                  className="border rounded-lg pl-10 p-2 w-full"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <Video
                className="absolute top-3 left-3 text-gray-400"
                size={16}
              />
              <input
                type="url"
                name="meetingUrl"
                placeholder="رابط الاجتماع (اختياري)"
                value={newAvailability.meetingUrl}
                onChange={handleInputChange}
                className="border rounded-lg pl-10 p-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition flex items-center"
            >
              <Plus size={16} className="mr-2" />
              إضافة الموعد
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
            <Calendar size={20} className="mr-2" />
            مواعيدي
          </h3>

          {isLoading ? (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              <p className="mt-2 text-gray-600">جاري تحميل المواعيد...</p>
            </div>
          ) : availabilities.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Calendar size={48} className="mx-auto mb-4 opacity-30" />
              <p>لا يوجد مواعيد مضافة بعد.</p>
            </div>
          ) : (
            Object.keys(groupedAvailabilities)
              .sort()
              .map((date) => (
                <div key={date} className="mb-6">
                  <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {new Date(date).toLocaleDateString("ar-EG", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h4>
                  <div className="space-y-3">
                    {groupedAvailabilities[date].map((availability) => (
                      <div
                        key={availability._id}
                        className={`border p-4 rounded-lg shadow-sm flex justify-between items-center ${
                          availability.isBooked
                            ? "bg-red-50 border-red-200"
                            : "bg-green-50 border-green-200"
                        }`}
                      >
                        <div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-2 text-gray-600" />
                            <span className="font-medium">
                              {availability.startTime} - {availability.endTime}
                            </span>
                            <span
                              className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                availability.isBooked
                                  ? "bg-red-100 text-red-800"
                                  : "bg-green-100 text-green-800"
                              }`}
                            >
                              {availability.isBooked ? (
                                <>
                                  <XCircle size={12} className="mr-1" />
                                  محجوز
                                </>
                              ) : (
                                <>
                                  <CheckCircle size={12} className="mr-1" />
                                  متاح
                                </>
                              )}
                            </span>
                          </div>
                          {availability.meetingUrl && (
                            <div className="mt-2 flex items-center">
                              <Link size={14} className="mr-1 text-blue-600" />
                              <a
                                href={availability.meetingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-sm underline"
                              >
                                الدخول للاجتماع
                              </a>
                            </div>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          {!availability.isBooked && (
                            <button
                              onClick={() =>
                                deleteAvailability(availability._id)
                              }
                              className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                              title="حذف الموعد"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityTeacher;
