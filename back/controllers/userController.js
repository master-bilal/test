const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library"); // إضافة هذه السطر
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // استخدام متغير البيئة CLIENT_ID الخاص بك من جوجل
const fs = require("fs");
const path = require("path");

// Register a new user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username: name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // إرسال التوكن في الكوكيز
    res.cookie("token", token, {
      httpOnly: true, // يجعل الكوكي غير قابل للوصول من الـ JavaScript
      secure: process.env.NODE_ENV === "production", // يجعل الكوكي Secure في بيئة الإنتاج
      sameSite: "Strict", // يمنع إرسال الكوكي في طلبات الجهات الخارجية
      maxAge: 60 * 60 * 1000, // مدة الصلاحية ساعة واحدة
    });

    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // إرسال التوكن في الكوكيز
    res.cookie("token", token, {
      httpOnly: false, // يجعل الكوكي غير قابل للوصول من الـ JavaScript
      secure: process.env.NODE_ENV === "production", // يجعل الكوكي Secure في بيئة الإنتاج
      sameSite: "Strict", // يمنع إرسال الكوكي في طلبات الجهات الخارجية
      maxAge: 60 * 60 * 1000, // مدة الصلاحية ساعة واحدة
    });

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Google Sign-In for Register
// const googleSignin = async (req, res) => {
//   const { token } = req.body;

//   try {
//     // Verify the Google ID token
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: process.env.GOOGLE_CLIENT_ID, // نفس CLIENT_ID الذي حصلت عليه من جوجل
//     });

//     const payload = ticket.getPayload();
//     const userId = payload["sub"]; // معرف المستخدم من جوجل

//     // Check if the user already exists in the database
//     let user = await User.findOne({ email: payload.email });

//     if (!user) {
//       // Create a new user if not found
//       user = new User({
//         username: payload.name,
//         email: payload.email,
//         password: "", // يمكن ترك كلمة المرور فارغة لأن المستخدم يستخدم Google لتسجيل الدخول
//       });

//       await user.save();
//     }

//     // Generate JWT token for the user
//     const tokenJWT = jwt.sign(
//       { userId: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res
//       .status(200)
//       .json({ message: "Google Sign-In & Register successful", token: tokenJWT, user });
//   } catch (error) {
//     console.error(error);
//     res.status(400).json({ message: "Google Sign-In failed" });
//   }
// };
// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { username, email } = req.body;

    // Check if email is being changed to one that already exists
    if (email) {
      const existingUser = await User.findOne({
        email,
        _id: { $ne: req.userId },
      });
      if (existingUser) {
        return res.status(400).json({ message: "Email already in use" });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      { username, email },
      { new: true, select: "-password" }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateProfilePicture = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete old profile picture if it exists
    if (user.profilePicture) {
      const oldImagePath = path.join("public", user.profilePicture);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // Update user with new profile picture path
    const relativePath = req.file.path.replace("public/", "");
    user.profilePicture = relativePath;
    await user.save();

    res.status(200).json({
      message: "Profile picture updated successfully",
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  updateProfilePicture,
};
