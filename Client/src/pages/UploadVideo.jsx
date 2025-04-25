// UploadVideo.jsx
import { useState } from "react";
import axios from "axios";

function UploadVideo() {
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleUpload = async () => {
    if (!video) return alert("اختر فيديو أولًا");

    setUploading(true);

    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "video_preset");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dy0njjgqm/video/upload",
        formData
      );

      setVideoUrl(res.data.secure_url);
      alert("تم رفع الفيديو!");
    } catch (err) {
      console.error("خطأ أثناء الرفع:", err);
      alert("حدث خطأ أثناء رفع الفيديو");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          رفع فيديو إلى Cloudinary
        </h2>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          className="mb-4"
        />
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {uploading ? "جاري الرفع..." : "رفع الفيديو"}
        </button>

        {videoUrl && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">الفيديو المرفوع:</h3>
            <video
              width="100%"
              height="auto"
              controls
              className="rounded-md shadow"
            >
              <source src={videoUrl} type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadVideo;
