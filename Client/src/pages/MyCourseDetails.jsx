import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPlay, FaClock, FaBookOpen, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);
  const [videoDurations, setVideoDurations] = useState({});
  const [videoKey, setVideoKey] = useState(0);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/my-courses/${courseId}`,
          {
            withCredentials: true,
          }
        );

        setCourse(res.data.course);
        const videosData = res.data.videos || [];
        setVideos(videosData);

        if (videosData.length > 0) {
          setActiveVideo(videosData[0]);
          loadAllVideoDurations(videosData);
        }
      } catch (err) {
        console.error("Failed to fetch course details", err);
        setError("حدث خطأ أثناء تحميل بيانات الدورة");
      } finally {
        setLoading(false);
      }
    };

    const loadAllVideoDurations = (videos) => {
      videos.forEach((video) => {
        const videoElement = document.createElement("video");
        videoElement.src = `http://localhost:5000/${video.videoUrl}`;
        videoElement.preload = "metadata";

        videoElement.onloadedmetadata = () => {
          const duration = videoElement.duration;
          const formattedDuration = formatTime(duration);

          setVideoDurations((prev) => ({
            ...prev,
            [video._id]: formattedDuration,
          }));
        };

        videoElement.onerror = () => {
          setVideoDurations((prev) => ({
            ...prev,
            [video._id]: "00:00",
          }));
        };
      });
    };

    fetchCourseDetails();
  }, [courseId]);

  useEffect(() => {
    if (videoRef.current && activeVideo) {
      setVideoKey((prevKey) => prevKey + 1);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  }, [activeVideo?._id]);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleVideoSelect = (video) => {
    setActiveVideo(video);
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-white"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500"
        ></motion.div>
      </motion.div>
    );

  if (error)
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white border border-green-200 text-green-700 px-6 py-4 rounded-lg max-w-2xl mx-auto mt-10 text-right"
        role="alert"
      >
        <div className="flex items-center justify-end">
          <FaInfoCircle className="ml-2" />
          <strong className="font-bold">خطأ! </strong>
        </div>
        <span className="block">{error}</span>
      </motion.div>
    );

  return (
    <div
      className="bg-gradient-to-br from-green-50 to-white min-h-screen"
      dir="rtl"
    >
      {/* Course Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-600 to-green-500 text-white py-8 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <FaBookOpen className="ml-3 text-2xl" />
            <h1 className="text-3xl font-bold">{course?.courseTitle}</h1>
          </div>
          <p className="mt-3 text-green-100 max-w-3xl text-lg">
            {course?.courseDescription}
          </p>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Main video player */}
          <div className="lg:col-span-8">
            {activeVideo ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="relative pb-9/16">
                  <video
                    ref={videoRef}
                    key={videoKey}
                    controls
                    preload="metadata"
                    src={`http://localhost:5000/${activeVideo.videoUrl}`}
                    className="w-full h-full rounded-t-xl"
                    poster={
                      course?.coursePicture
                        ? `http://localhost:5000/${course.coursePicture}`
                        : undefined
                    }
                    onLoadedMetadata={(e) => {
                      e.target.currentTime = 0.1;
                      e.target.pause();
                    }}
                    onCanPlay={(e) => {
                      setTimeout(() => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }, 100);
                    }}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {activeVideo.title}
                  </h2>
                  <p className="mt-3 text-gray-600">
                    {activeVideo.description}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-xl shadow-xl p-8 text-center border border-gray-100"
              >
                <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-6 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  لا توجد فيديوهات متاحة
                </h3>
                <p className="mt-2 text-gray-600">
                  لم يتم إضافة أي فيديوهات لهذه الدورة بعد.
                </p>
              </motion.div>
            )}
          </div>

          {/* Course content sidebar */}
          <div className="mt-6 lg:mt-0 lg:col-span-4">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="p-5 bg-gradient-to-r from-green-600 to-green-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-white">
                    محتوى الدورة
                  </h3>
                  <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {videos.length} دروس
                  </span>
                </div>
              </div>

              <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
                {videos.length > 0 ? (
                  videos.map((video, index) => (
                    <motion.button
                      key={video._id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleVideoSelect(video)}
                      className={`w-full p-4 hover:bg-green-50 transition-all duration-200 flex items-start ${
                        activeVideo?._id === video._id
                          ? "bg-green-50 border-r-4 border-green-500"
                          : ""
                      }`}
                    >
                      <div className="flex-shrink-0 h-10 w-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      <div className="flex-1 text-right">
                        <h4 className="font-medium text-gray-800 mb-1">
                          {video.title}
                        </h4>
                        <p className="text-sm text-gray-500 line-clamp-1">
                          {video.description}
                        </p>

                        <div className="flex items-center mt-2 text-xs text-gray-500 justify-end">
                          <span>
                            {videoDurations[video._id] || "جاري التحميل..."}
                          </span>
                          <FaClock className="mr-1" />
                        </div>
                      </div>

                      {activeVideo?._id === video._id && (
                        <div className="flex-shrink-0 ml-2">
                          <div className="bg-green-100 p-2 rounded-full">
                            <FaPlay className="h-4 w-4 text-green-600" />
                          </div>
                        </div>
                      )}
                    </motion.button>
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    لا توجد دروس متاحة في هذه الدورة.
                  </div>
                )}
              </div>
            </motion.div>

            {/* Course Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 bg-white rounded-xl p-5 shadow-xl border border-gray-100"
            >
              <h3 className="text-xl font-medium text-gray-800 mb-4 flex items-center">
                <FaInfoCircle className="ml-2 text-green-500" />
                معلومات الدورة
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">عدد الدروس:</span>
                  <span className="font-medium">{videos.length}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
