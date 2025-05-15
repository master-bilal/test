const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware"); // Adjust path as needed

// Create a quiz
router.post("/create", authMiddleware, quizController.createQuiz);

// Get all published quizzes
router.get("/", quizController.getAllQuizzes);

// Get a specific quiz by ID
router.get("/:id", quizController.getQuizById);

// Submit a quiz
router.post("/submit/:quizId", authMiddleware, quizController.submitQuiz);

module.exports = router;
