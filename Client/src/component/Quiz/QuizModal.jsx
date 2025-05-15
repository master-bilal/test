import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizModal = ({ quizId, onClose }) => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    if (quizId) {
      axios
        .get(`http://localhost:5000/api/quiz/${quizId}`)
        .then((res) => setQuiz(res.data))
        .catch((err) => console.error("Error fetching quiz:", err));
    }
  }, [quizId]);

  const handleAnswerChange = (qIdx, optText) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: optText }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let i = 0; i < quiz.questions.length; i++) {
      if (!answers[i]) {
        alert("Please answer all questions.");
        return;
      }
    }

    try {
      const formattedAnswers = quiz.questions.map((q, idx) => ({
        questionId: q._id,
        selectedOption: answers[idx],
      }));

      const res = await axios.post(
        `http://localhost:5000/api/quiz/submit/${quizId}`,
        { answers: formattedAnswers },
        { withCredentials: true }
      );

      setScore(res.data.score);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission failed", err);
      alert("Failed to submit quiz.");
    }
  };

  if (!quizId || !quiz) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{quiz.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500"
          >
            ✖
          </button>
        </div>

        {submitted ? (
          <div className="text-center text-green-700 font-semibold text-lg">
            Quiz Submitted! Your score: {score} / {quiz.questions.length}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {quiz.questions.map((q, qIdx) => (
              <div key={q._id}>
                <p className="font-medium">
                  {qIdx + 1}. {q.questionText}
                </p>
                <div className="ml-4 space-y-1 mt-1">
                  {q.options.map((opt, optIdx) => (
                    <label key={optIdx} className="block cursor-pointer">
                      <input
                        type="radio"
                        name={`question-${qIdx}`}
                        checked={answers[qIdx] === opt.text}
                        onChange={() => handleAnswerChange(qIdx, opt.text)}
                        className="mr-2"
                        required
                      />
                      {opt.text}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Quiz
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
