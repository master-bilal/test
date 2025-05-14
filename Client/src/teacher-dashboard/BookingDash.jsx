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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Teacher Dashboard</h2>

      <form onSubmit={addAvailability} className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add New Availability</h3>
        <div className="flex gap-4 mb-2">
          <input
            type="date"
            name="date"
            value={newAvailability.date}
            onChange={handleInputChange}
            className="border p-2"
          />
          <input
            type="time"
            name="startTime"
            value={newAvailability.startTime}
            onChange={handleInputChange}
            className="border p-2"
          />
          <input
            type="time"
            name="endTime"
            value={newAvailability.endTime}
            onChange={handleInputChange}
            className="border p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Availability
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">My Availabilities</h3>
      <ul>
        {availabilities.map((availability) => (
          <li key={availability._id} className="border p-2 mb-2">
            {availability.date} - {availability.startTime} to{" "}
            {availability.endTime}
            {availability.isBooked ? " (Booked)" : " (Available)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailabilityTeacher;
