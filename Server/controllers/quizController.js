const Quiz = require("../models/Quiz");
const QuizSubmission = require("../models/QuizSubmission");

// Create a quiz (teacher/admin)
exports.createQuiz = async (req, res) => {
  try {
    const { title, description, questions } = req.body;

    const quiz = new Quiz({
      title,
      description,
      questions,
      createdBy: req.userId,
    });

    await quiz.save();
    res.status(201).json({ message: "Quiz created successfully", quiz });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all published quizzes
exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ isPublished: true }).populate(
      "createdBy",
      "username"
    );
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific quiz
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ error: "Quiz not found" });

    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Submit a quiz
exports.submitQuiz = async (req, res) => {
  const userId = req.userId; // from auth middleware

  try {
    const { answers } = req.body;
    const quiz = await Quiz.findById(req.params.quizId);

    if (!quiz) return res.status(404).json({ error: "Quiz not found" });

    let score = 0;

    quiz.questions.forEach((question) => {
      const submittedAnswer = answers.find(
        (ans) => String(ans.questionId) === String(question._id)
      );

      if (submittedAnswer) {
        if (question.type === "true-false") {
          // If your true-false question stores correct answer as a string in question.correctAnswer
          // (e.g., "true" or "false"), otherwise fallback to options logic below

          if (question.correctAnswer) {
            if (
              submittedAnswer.selectedOption.toLowerCase() ===
              question.correctAnswer.toLowerCase()
            ) {
              score++;
            }
          } else {
            // fallback: find correct option in options array (if it exists)
            const correctOption = question.options?.find(
              (opt) => opt.isCorrect
            );
            if (
              correctOption &&
              submittedAnswer.selectedOption.toLowerCase() ===
                correctOption.text.toLowerCase()
            ) {
              score++;
            }
          }
        } else if (question.type === "multiple-choice") {
          const correctOption = question.options?.find((opt) => opt.isCorrect);
          if (
            correctOption &&
            submittedAnswer.selectedOption === correctOption.text
          ) {
            score++;
          }
        }
      }
    });

    const submission = new QuizSubmission({
      user: userId, // fixed: use userId from middleware
      quiz: quiz._id,
      answers,
      score,
    });

    await submission.save();

    res.json({ message: "Quiz submitted", score });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
