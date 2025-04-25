// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import FlipPage from "react-flip-page"; // إذا كنت تستخدم المكتبة للصفحات المنقلبة

// const QuranPage = () => {
//   const [pages, setPages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://api.alquran.cloud/v1/quran/ar.alafasy")
//       .then((response) => {
//         console.log(response.data); // لفحص استجابة الـ API
//         setPages(response.data.data.ayahs); // إذا كانت الآيات موجودة هنا
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching Quran data:", error);
//       });
//   }, []);

//   if (loading) {
//     return <div className="text-center p-5">جاري التحميل...</div>;
//   }

//   return (
//     <div className="quran-container p-5">
//       <h1 className="text-center text-4xl font-bold mb-5">القرآن الكريم</h1>
//       <FlipPage>
//         {pages.map((page, index) => (
//           <div
//             key={index}
//             className="quran-page bg-white p-5 rounded-lg shadow-lg mb-4"
//           >
//             <p className="text-right text-lg font-serif">{page.text}</p>
//           </div>
//         ))}
//       </FlipPage>
//     </div>
//   );
// };

// export default QuranPage;
