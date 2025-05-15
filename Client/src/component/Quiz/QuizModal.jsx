import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimes, FaCheck, FaAward } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const QuizModal = ({ quizId, onClose }) => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (quizId) {
      setIsLoading(true);
      axios
        .get(`http://localhost:5000/api/quiz/${quizId}`)
        .then((res) => {
          setQuiz(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching quiz:", err);
          setIsLoading(false);
        });
    }
  }, [quizId]);

  const handleAnswerChange = (qIdx, optText) => {
    setAnswers((prev) => ({ ...prev, [qIdx]: optText }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let i = 0; i < quiz.questions.length; i++) {
      if (!answers[i]) {
        alert("الرجاء الإجابة على جميع الأسئلة");
        return;
      }
    }

    setIsSubmitting(true);
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
      alert("فشل في إرسال الاختبار");
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  if (!quizId) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <motion.div
          className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          variants={modalVariants}
        >
          <div className="sticky top-0 bg-white p-4 border-b border-gray-200 flex justify-between items-center z-10">
            <h2 className="text-xl font-semibold text-gray-800">
              {quiz?.title || "الاختبار"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-500 transition-colors"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          <div className="p-6">
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600"></div>
              </div>
            ) : submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                  <FaAward className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                  تم إرسال الاختبار بنجاح!
                </h3>
                <p className="text-lg text-gray-700">
                  نتيجتك: <span className="font-bold">{score}</span> من{" "}
                  <span className="font-bold">{quiz.questions.length}</span>
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  إغلاق
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {quiz?.questions.map((q, qIdx) => (
                  <motion.div
                    key={q._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: qIdx * 0.05 }}
                    className="p-4 bg-gray-50 rounded-lg"
                  >
                    <p className="font-medium text-lg text-gray-800 mb-3">
                      {qIdx + 1}. {q.questionText}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => (
                        <label
                          key={optIdx}
                          className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                            answers[qIdx] === opt.text
                              ? "bg-green-100 border border-green-200"
                              : "bg-white border border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${qIdx}`}
                            checked={answers[qIdx] === opt.text}
                            onChange={() => handleAnswerChange(qIdx, opt.text)}
                            className="hidden"
                            required
                          />
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                              answers[qIdx] === opt.text
                                ? "border-green-600 bg-green-600"
                                : "border-gray-400"
                            }`}
                          >
                            {answers[qIdx] === opt.text && (
                              <FaCheck className="text-white text-xs" />
                            )}
                          </div>
                          <span className="text-gray-700">{opt.text}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white ${
                      isSubmitting
                        ? "bg-green-400"
                        : "bg-green-600 hover:bg-green-700"
                    } transition-colors`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        جاري الإرسال...
                      </>
                    ) : (
                      "إرسال الاختبار"
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuizModal;
