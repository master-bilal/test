import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizModal from "../component/Quiz/QuizModal";
import { FaBook, FaClipboardList, FaPlay, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const Quis = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [activeQuizId, setActiveQuizId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quiz")
      .then((res) => {
        setQuizzes(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching quizzes", err);
        setIsLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className=" text-right" dir="rtl">
    <div className="min-h-screen bg-gray-50 p-8 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-8"
        >
          <FaBook className="text-green-600 text-3xl mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">
            الاختبارات المتاحة
          </h1>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-600"></div>
          </div>
        ) : quizzes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <FaClipboardList className="mx-auto text-5xl text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">
              لا توجد اختبارات متاحة حالياً
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {quizzes.map((quiz) => (
              <motion.div
                key={quiz._id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                      <FaClipboardList className="text-green-600 text-xl" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {quiz.title}
                      </h2>
                      <p className="mt-2 text-gray-600">{quiz.description}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveQuizId(quiz._id)}
                      className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <FaPlay className="ml-2" />
                      بدء الاختبار
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeQuizId && (
          <QuizModal
            quizId={activeQuizId}
            onClose={() => setActiveQuizId(null)}
          />
        )}
      </div>
    </div>
    </div>
  );
};

export default Quis;
