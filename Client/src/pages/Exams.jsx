import React, { useEffect, useState } from "react";
import axios from "axios";
import QuizModal from "../component/Quiz/QuizModal"; // import the modal

const Quis = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [activeQuizId, setActiveQuizId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/quiz")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.error("Error fetching quizzes", err));
  }, []);

  return (
    <div className="ml-64 p-8">
      <h1 className="text-2xl font-bold mb-6">Available Quizzes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quizzes.map((quiz) => (
          <div key={quiz._id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">{quiz.title}</h2>
            <p className="text-gray-600 mb-2">{quiz.description}</p>
            <button
              onClick={() => setActiveQuizId(quiz._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Take Quiz
            </button>
          </div>
        ))}
      </div>

      {activeQuizId && (
        <QuizModal
          quizId={activeQuizId}
          onClose={() => setActiveQuizId(null)}
        />
      )}
    </div>
  );
};

export default Quis;
