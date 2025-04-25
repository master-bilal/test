const User = require("../models/user");
const Course = require("../models/courses");
const Certificate = require("../models/certificate");

// Get user statistics
exports.getUserStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ isdeleted: false });
    const userCount = await User.countDocuments({
      role: "user",
      isdeleted: false,
    });
    const teacherCount = await User.countDocuments({
      role: "teacher",
      isdeleted: false,
    });
    const adminCount = await User.countDocuments({
      role: "admin",
      isdeleted: false,
    });
    const inactiveCount = await User.countDocuments({ isdeleted: true });

    res.json({
      totalUsers,
      userCount,
      teacherCount,
      adminCount,
      inactiveCount,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all users with pagination, search, and filtering
exports.getUsers = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      role = "",
      status = "",
    } = req.query;

    const query = {};
    if (search) {
      query.$or = [
        { username: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }
    if (role) query.role = role;
    if (status) query.isdeleted = status === "inactive";

    const users = await User.find(query)
      .select("-password -otp -otpExpiry")
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(query);

    res.json({
      users,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      totalUsers: total,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single user with courses and certificates
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password -otp -otpExpiry")
      .populate("courses")
      .populate("Certificate");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user role or status
exports.updateUser = async (req, res) => {
  try {
    const { role, isdeleted } = req.body;
    const updates = {};

    if (role) updates.role = role;
    if (typeof isdeleted !== "undefined") updates.isdeleted = isdeleted;

    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    }).select("-password -otp -otpExpiry");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
