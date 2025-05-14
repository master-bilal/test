// middleware/videoUpload.js
const multer = require("multer");
const path = require("path");

const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/courseVideos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const videoFilter = function (req, file, cb) {
  const ext = path.extname(file.originalname).toLowerCase();
  if (
    ext === ".mp4" ||
    ext === ".mov" ||
    ext === ".avi" ||
    ext === ".wmv" ||
    ext === ".mkv"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Only video files are allowed!"), false);
  }
};

const uploadVideo = multer({ storage: videoStorage, fileFilter: videoFilter });

module.exports = uploadVideo;
