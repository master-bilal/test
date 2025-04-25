import React, { useState } from "react";

const Programs = () => {
  // Sample data for programs
  const programs = [
    {
      id: 1,
      title: "دورة التجويد المتقدمة",
      instructor: "د. بسمة أحمد",
      price: "20 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
    {
      id: 2,
      title: "تفسير القرآن الكريم",
      instructor: "د. بسمة أحمد",
      price: "20 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
    {
      id: 3,
      title: "علوم الحديث النبوي",
      instructor: "د. بسمة أحمد",
      price: "20 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
    {
      id: 4,
      title: "أصول الفقه الإسلامي",
      instructor: "د. محمد عبدالله",
      price: "25 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
    {
      id: 5,
      title: "السيرة النبوية",
      instructor: "د. سارة القاسم",
      price: "15 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
    {
      id: 6,
      title: "العقيدة الإسلامية",
      instructor: "د. أحمد الصالح",
      price: "20 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
    {
      id: 7,
      title: "فن الخطابة الدينية",
      instructor: "د. نور الهدى",
      price: "30 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
    {
      id: 8,
      title: "اللغة العربية للدراسات الإسلامية",
      instructor: "د. رانيا سليم",
      price: "25 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
    {
      id: 9,
      title: "مقارنة الأديان",
      instructor: "د. يوسف حسان",
      price: "35 د.ا",
      image: "/api/placeholder/150/150",
      icon: "/api/placeholder/30/30",
    },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(programs.length / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = programs.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-green-600 mb-10">
        البرامج الدراسية
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentItems.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-200"
          >
            <div className="h-48 bg-gray-100 relative overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-white p-2 rounded-full">
                <img src={program.icon} alt="icon" className="w-6 h-6" />
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-xl font-bold text-green-700 mb-2">
                {program.title}
              </h2>

              <div className="flex items-center mt-2 mb-4">
                <img
                  src="/api/placeholder/24/24"
                  alt="profile"
                  className="w-6 h-6 rounded-full"
                />
                <span className="mr-2 text-gray-700">{program.instructor}</span>
              </div>

              <div className="mt-auto flex justify-between items-center">
                <span className="font-bold text-green-600 text-lg">
                  {program.price}
                </span>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-300">
                  سجل الآن
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-12 space-x-2 space-x-reverse">
        <button
          onClick={() => goToPage(1)}
          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200"
        >
          «
        </button>

        <button
          onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200"
          disabled={currentPage === 1}
        >
          ‹
        </button>

        {/* Page buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-green-600 text-white"
                : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200"
          disabled={currentPage === totalPages}
        >
          ›
        </button>

        <button
          onClick={() => goToPage(totalPages)}
          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200"
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Programs;
