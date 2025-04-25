import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseTitle: "",
    courseDescription: "",
    price: "",
    coursePicture: null,
    videos: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "videos" ? [...files] : files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const data = new FormData();
    data.append("courseTitle", formData.courseTitle);
    data.append("courseDescription", formData.courseDescription);
    data.append("price", formData.price);

    if (formData.coursePicture) {
      data.append("coursePicture", formData.coursePicture);
    }

    if (formData.videos.length > 0) {
      formData.videos.forEach((video) => {
        data.append("videos", video);
      });
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/courses/create",
        data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        alert("Course created successfully!");
        navigate("/courses");
      } else {
        console.log(data)
        setError(response.data.message || "Failed to create course");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "An error occurred"
      );
      console.error("Error creating course:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Create a New Course
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Fill out the form to add a new course
          </p>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Title */}
          <div>
            <label
              htmlFor="courseTitle"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Title
            </label>
            <input
              type="text"
              id="courseTitle"
              name="courseTitle"
              value={formData.courseTitle}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Course Description */}
          <div>
            <label
              htmlFor="courseDescription"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Description
            </label>
            <textarea
              id="courseDescription"
              name="courseDescription"
              value={formData.courseDescription}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Course Picture */}
          <div>
            <label
              htmlFor="coursePicture"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Picture
            </label>
            <input
              type="file"
              id="coursePicture"
              name="coursePicture"
              onChange={handleFileChange}
              accept="image/*"
              required
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>

          {/* Videos */}
          <div>
            <label
              htmlFor="videos"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Course Videos (Max 10)
            </label>
            <input
              type="file"
              id="videos"
              name="videos"
              onChange={handleFileChange}
              accept="video/*"
              multiple
              required
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Creating..." : "Create Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
