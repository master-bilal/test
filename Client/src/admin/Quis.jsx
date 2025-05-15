import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Book,
  Plus,
  CheckSquare,
  Square,
  HelpCircle,
  Edit3,
  List,
  Save,
} from "lucide-react";

const Quis = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizForm, setQuizForm] = useState({
    title: "",
    description: "",
    questions: [
      {
        questionText: "",
        type: "multiple-choice",
        options: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
      },
    ],
  });

  const getAllQuizzes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/quiz");
      setQuizzes(res.data);
    } catch (err) {
      console.error("فشل في جلب الاختبارات:", err);
    }
  };

  useEffect(() => {
    getAllQuizzes();
  }, []);

  const handleFormChange = (e, qIdx, optIdx = null) => {
    const { name, value, type, checked } = e.target;
    const newForm = { ...quizForm };

    if (qIdx === null) {
      newForm[name] = value;
    } else {
      if (name === "questionText" || name === "type") {
        newForm.questions[qIdx][name] = value;

        if (name === "type" && value === "true-false") {
          newForm.questions[qIdx].options = [
            { text: "true", isCorrect: false },
            { text: "false", isCorrect: false },
          ];
        } else if (name === "type" && value === "multiple-choice") {
          newForm.questions[qIdx].options = [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
          ];
        }
      } else if (optIdx !== null) {
        if (type === "checkbox") {
          newForm.questions[qIdx].options = newForm.questions[qIdx].options.map(
            (opt, idx) => ({
              ...opt,
              isCorrect: idx === optIdx,
            })
          );
        } else {
          newForm.questions[qIdx].options[optIdx][name] = value;
        }
      }
    }

    setQuizForm(newForm);
  };

  const addQuestion = () => {
    setQuizForm((prev) => ({
      ...prev,
      questions: [
        ...prev.questions,
        {
          questionText: "",
          type: "multiple-choice",
          options: [
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
            { text: "", isCorrect: false },
          ],
        },
      ],
    }));
  };

  const addOption = (qIdx) => {
    const newForm = { ...quizForm };
    newForm.questions[qIdx].options.push({ text: "", isCorrect: false });
    setQuizForm(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/quiz/create", quizForm, {
        withCredentials: true,
      });

      alert("تم إنشاء الاختبار بنجاح");
      setQuizForm({
        title: "",
        description: "",
        questions: [
          {
            questionText: "",
            type: "multiple-choice",
            options: [
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
              { text: "", isCorrect: false },
            ],
          },
        ],
      });

      getAllQuizzes();
    } catch (err) {
      console.error("فشل في إنشاء الاختبار:", err);
      alert("حدث خطأ أثناء إنشاء الاختبار");
    }
  };

  return (
    <div className="ml-64 p-8 max-w-4xl">
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold mb-2 flex items-center">
          <Edit3 className="mr-2 text-blue-600" size={24} />
          إنشاء اختبار
        </h1>
        <p className="text-gray-600">صمّم أسئلتك وخياراتك أدناه</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              عنوان الاختبار
            </label>
            <div className="flex items-center border rounded focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <Book className="mx-2 text-gray-400" size={18} />
              <input
                type="text"
                name="title"
                value={quizForm.title}
                onChange={(e) => handleFormChange(e, null)}
                placeholder="أدخل عنوان الاختبار"
                className="w-full p-2 border-0 focus:ring-0 focus:outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              وصف الاختبار
            </label>
            <div className="flex items-center border rounded focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <HelpCircle className="mx-2 text-gray-400" size={18} />
              <input
                type="text"
                name="description"
                value={quizForm.description}
                onChange={(e) => handleFormChange(e, null)}
                placeholder="وصف مختصر للاختبار"
                className="w-full p-2 border-0 focus:ring-0 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {quizForm.questions.map((q, qIdx) => (
          <div
            key={qIdx}
            className="p-6 border rounded-lg bg-white shadow-sm space-y-4"
          >
            <div className="flex justify-between items-center border-b pb-3 mb-2">
              <h3 className="font-medium text-lg text-gray-800 flex items-center">
                <span className="flex items-center justify-center bg-blue-100 text-blue-800 w-6 h-6 rounded-full mr-2 text-sm font-bold">
                  {qIdx + 1}
                </span>
                سؤال
              </h3>
              <div className="flex items-center">
                <label className="mr-2 text-sm font-medium text-gray-600">
                  النوع:
                </label>
                <select
                  name="type"
                  value={q.type}
                  onChange={(e) => handleFormChange(e, qIdx)}
                  className="border p-1 rounded text-sm bg-gray-50"
                >
                  <option value="multiple-choice">اختيار من متعدد</option>
                  <option value="true-false">صح / خطأ</option>
                </select>
              </div>
            </div>

            <div className="flex items-center border rounded focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <HelpCircle className="mx-2 text-gray-400" size={18} />
              <input
                type="text"
                name="questionText"
                value={q.questionText}
                onChange={(e) => handleFormChange(e, qIdx)}
                placeholder={`اكتب السؤال ${qIdx + 1}`}
                className="w-full p-2 border-0 focus:ring-0 focus:outline-none"
                required
              />
            </div>

            <div className="mt-4 pl-2 space-y-3">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                {q.type === "multiple-choice"
                  ? "الخيارات"
                  : "اختر الإجابة الصحيحة:"}
              </h4>

              <div className="space-y-2 pl-2">
                {q.options.map((opt, optIdx) => (
                  <div key={optIdx} className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        handleFormChange(
                          {
                            target: {
                              type: "checkbox",
                            },
                          },
                          qIdx,
                          optIdx
                        );
                      }}
                      className="flex-shrink-0 focus:outline-none"
                    >
                      {opt.isCorrect ? (
                        <CheckSquare className="text-green-600" size={20} />
                      ) : (
                        <Square className="text-gray-400" size={20} />
                      )}
                    </button>

                    {q.type === "multiple-choice" ? (
                      <input
                        type="text"
                        name="text"
                        value={opt.text}
                        onChange={(e) => handleFormChange(e, qIdx, optIdx)}
                        placeholder={`خيار ${optIdx + 1}`}
                        className="border p-2 rounded w-full text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    ) : (
                      <label className="capitalize font-medium">
                        {opt.text}
                      </label>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {q.type === "multiple-choice" && (
              <button
                type="button"
                onClick={() => addOption(qIdx)}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 mt-2"
              >
                <Plus className="mr-1" size={16} />
                إضافة خيار
              </button>
            )}
          </div>
        ))}

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={addQuestion}
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 shadow-sm"
          >
            <Plus className="mr-1" size={18} />
            إضافة سؤال
          </button>

          <button
            type="submit"
            className="flex items-center bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 shadow-sm"
          >
            <Save className="mr-2" size={18} />
            إنشاء اختبار
          </button>
        </div>
      </form>

      <div className="mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <List className="mr-2 text-blue-600" size={24} />
          جميع الاختبارات
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quizzes.length === 0 && (
            <p className="text-gray-500 italic col-span-2">
              لا توجد اختبارات. أنشئ اختبارك الأول أعلاه.
            </p>
          )}

          {quizzes.map((quiz) => (
            <div
              key={quiz._id}
              className="p-5 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-lg text-gray-800">{quiz.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{quiz.description}</p>
              <div className="flex items-center mt-3 text-sm text-gray-500">
                <HelpCircle size={14} className="mr-1" />
                <span>{quiz.questions.length} سؤال</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quis;
