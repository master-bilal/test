const multer = require("multer");
const path = require("path");
const fs = require("fs");

// إنشاء مجلدات التخزين إذا لم تكن موجودة
const ensureDirectoryExists = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let uploadPath = "";

    if (file.fieldname === "coursePicture") {
      uploadPath = "uploads/coursePictures/";
    } else if (file.fieldname === "videos") {
      uploadPath = "uploads/courseVideos/";
    }

    ensureDirectoryExists(uploadPath);
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      uniqueSuffix + path.extname(file.originalname) // بدون إضافة file.fieldname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === "coursePicture") {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only images are allowed for course picture"), false);
    }
  } else if (file.fieldname === "videos") {
    if (file.mimetype.startsWith("video/")) {
      cb(null, true);
    } else {
      cb(new Error("Only videos are allowed for course videos"), false);
    }
  } else {
    cb(new Error("Unexpected field"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50, // 50MB للفيديوهات
  },
  fileFilter: fileFilter,
});

module.exports = upload;
