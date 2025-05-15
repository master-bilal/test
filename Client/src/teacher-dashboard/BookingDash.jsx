import React, { useEffect, useState } from "react";
import axios from "axios";

const AvailabilityTeacher = () => {
  const [availabilities, setAvailabilities] = useState([]);
  const [newAvailability, setNewAvailability] = useState({
    date: "",
    startTime: "",
    endTime: "",
  });

  const fetchAvailabilities = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/teacher/availabilities",
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setAvailabilities(response.data);
    } catch (err) {
      console.error("Error fetching availabilities:", err);
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
      setNewAvailability({ date: "", startTime: "", endTime: "" });
      fetchAvailabilities();
    } catch (err) {
      console.error("Error adding availability:", err);
    }
  };

  useEffect(() => {
    fetchAvailabilities();
  }, []);

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Teacher Dashboard
      </h2>

      <form
        onSubmit={addAvailability}
        className="mb-6 bg-white p-6 rounded-2xl shadow"
      >
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Add New Availability
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <input
            type="date"
            name="date"
            value={newAvailability.date}
            onChange={handleInputChange}
            className="border rounded p-2 flex-1"
            required
          />
          <input
            type="time"
            name="startTime"
            value={newAvailability.startTime}
            onChange={handleInputChange}
            className="border rounded p-2 flex-1"
            required
          />
          <input
            type="time"
            name="endTime"
            value={newAvailability.endTime}
            onChange={handleInputChange}
            className="border rounded p-2 flex-1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
        >
          Add Availability
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        My Availabilities
      </h3>
      <ul>
        {availabilities.map((availability) => (
          <li
            key={availability._id}
            className={`border p-4 mb-3 rounded-lg shadow-sm ${
              availability.isBooked
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {availability.date} - {availability.startTime} to{" "}
            {availability.endTime}{" "}
            {availability.isBooked ? "(Booked)" : "(Available)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailabilityTeacher;
