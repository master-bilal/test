import React from 'react';

export default function AboutUsModern() {
  // وظيفة التوجيه إلى صفحة الاتصال
  const goToContactPage = () => {
    window.location.href = "/contactus";
  };

  return (
    <div className="font-sans text-right bg-white" dir="rtl">
      {/* القسم الرئيسي - هيدر عصري */}
      <header className="relative h-96 overflow-hidden">
        {/* صورة الخلفية */}
        <div className="absolute inset-0 bg-green-900 bg-opacity-60 z-10"></div>
        <img
          src="/api/placeholder/1920/700"
          alt="القرآن الكريم"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            من نحن
          </h1>
          <div className="w-24 h-1 bg-white mb-8"></div>
          <p className="text-xl md:text-2xl max-w-3xl text-center leading-relaxed">
            منصة متكاملة لتعليم وحفظ القرآن الكريم وعلومه بأساليب تقنية حديثة
            على يد نخبة من المشايخ والأساتذة المختصين
          </p>
        </div>
      </header>

      {/* قسم رؤيتنا - تصميم عصري بالبطاقات */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              رؤيتنا ورسالتنا
            </h2>
            <div className="w-16 h-1 bg-green-500"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">رؤيتنا</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                أن نكون المنصة الرائدة عالمياً في تعليم القرآن الكريم وعلومه،
                وتمكين المسلمين في جميع أنحاء العالم من تعلم كتاب الله بأحدث
                الأساليب التقنية وأكثرها فاعلية.
              </p>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-lg transform transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.354 18 4.828 18h10.343c2.474 0 4.011-3.231 2.121-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                رسالتنا
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                توفير بيئة تعليمية تفاعلية متكاملة، تجمع بين أصالة العلوم
                الشرعية وحداثة التقنية، مع إتاحة الفرصة للجميع لتعلم القرآن
                الكريم وإتقان تلاوته بمرونة وجودة عالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم ما يميزنا - تصميم عصري مع أيقونات */}
      <section className="py-20 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              ما يميزنا
            </h2>
            <div className="w-16 h-1 bg-green-500"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:shadow-xl transition-all duration-300">
              <div className="mb-6 text-center">
                <svg
                  className="h-16 w-16 mx-auto text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4 text-center">
                دورات تعليمية مرئية
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                محتوى مرئي عالي الجودة يشمل دروساً مباشرة ومسجلة تغطي كافة
                مستويات التلاوة والتجويد
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:shadow-xl transition-all duration-300">
              <div className="mb-6 text-center">
                <svg
                  className="h-16 w-16 mx-auto text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4 text-center">
                أساتذة متخصصون
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                نخبة من المشايخ والأساتذة المجازين بالأسانيد المتصلة وذوي الخبرة
                في التعليم
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:shadow-xl transition-all duration-300">
              <div className="mb-6 text-center">
                <svg
                  className="h-16 w-16 mx-auto text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-4 text-center">
                اختبارات متنوعة
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                منظومة متكاملة من الاختبارات الإلكترونية والوجاهية للإجازات
                وقياس المستويات بدقة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم فيديو ترويجي */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              تعرف على منصتنا
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-4"></div>
            <p className="text-gray-600 text-xl text-center max-w-3xl">
              شاهد هذا الفيديو التعريفي لتتعرف على المنصة وما تقدمه من خدمات
              تعليمية متميزة
            </p>
          </div>

          <div className="relative bg-green-100 rounded-2xl overflow-hidden shadow-xl aspect-w-16 aspect-h-9 h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="h-24 w-24 text-green-600 opacity-80"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <img
                src="/api/placeholder/1280/720"
                alt="فيديو تعريفي"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* قسم البرامج والدورات */}
      <section className="py-20 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              برامجنا ودوراتنا
            </h2>
            <div className="w-16 h-1 bg-green-500"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-green-100 relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="تعليم التلاوة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-600 text-white px-4 py-2 rounded-br-lg">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  تعليم تلاوة القرآن
                </h3>
                <p className="text-gray-600 mb-4">
                  دورات متخصصة لتعليم التلاوة الصحيحة للمبتدئين والمتقدمين
                </p>
                <a
                  href="#"
                  className="text-green-600 font-bold hover:text-green-700 inline-flex items-center"
                >
                  اكتشف المزيد
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-green-100 relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="برامج الإجازة"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-600 text-white px-4 py-2 rounded-br-lg">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  برامج الإجازة
                </h3>
                <p className="text-gray-600 mb-4">
                  برامج متكاملة لتأهيل الطلاب للحصول على الإجازة في القراءات
                  المختلفة
                </p>
                <a
                  href="#"
                  className="text-green-600 font-bold hover:text-green-700 inline-flex items-center"
                >
                  اكتشف المزيد
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-green-100 relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="علوم التجويد"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-600 text-white px-4 py-2 rounded-br-lg">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  علوم التجويد
                </h3>
                <p className="text-gray-600 mb-4">
                  كورسات متخصصة في علوم التجويد بمستويات مختلفة مع تطبيقات عملية
                </p>
                <a
                  href="#"
                  className="text-green-600 font-bold hover:text-green-700 inline-flex items-center"
                >
                  اكتشف المزيد
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-green-100 relative">
                <img
                  src="/api/placeholder/400/300"
                  alt="علوم القرآن"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-600 text-white px-4 py-2 rounded-br-lg">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  علوم القرآن
                </h3>
                <p className="text-gray-600 mb-4">
                  دورات في علوم القرآن المختلفة، التفسير والقراءات والرسم
                  العثماني
                </p>
                <a
                  href="#"
                  className="text-green-600 font-bold hover:text-green-700 inline-flex items-center"
                >
                  اكتشف المزيد
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم فريق العمل مع صور */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              فريق العمل
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <p className="text-xl text-gray-600 text-center max-w-3xl">
              نخبة من المشايخ والأساتذة المتخصصين ذوي الخبرة الواسعة في تعليم
              القرآن الكريم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center group">
                <div className="relative rounded-full w-48 h-48 mx-auto mb-6 overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <img
                    src="/api/placeholder/200/200"
                    alt="صورة الأستاذ"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-green-800 bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  الشيخ عبدالرحمن الأزهري
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  مدرس القراءات العشر
                </p>
                <p className="text-gray-600 max-w-xs mx-auto">
                  حاصل على الإجازة في القراءات العشر الكبرى وله خبرة أكثر من 15
                  عاماً في التدريس
                </p>
                <div className="mt-4 flex justify-center space-x-3 rtl:space-x-reverse">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors duration-300"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم عداد الإحصائيات */}
      <section className="py-20 px-4 md:px-8 bg-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-green-900 opacity-50"></div>
        <img
          src="/api/placeholder/1920/800"
          alt="خلفية"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="w-12 h-1 bg-white mx-auto mb-3"></div>
              <p className="text-xl">دورة تعليمية</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">45+</div>
              <div className="w-12 h-1 bg-white mx-auto mb-3"></div>
              <p className="text-xl">أستاذ متخصص</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25K+</div>
              <div className="w-12 h-1 bg-white mx-auto mb-3"></div>
              <p className="text-xl">طالب مسجل</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">18+</div>
              <div className="w-12 h-1 bg-white mx-auto mb-3"></div>
              <p className="text-xl">دولة حول العالم</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الشهادات والتقييمات */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              ماذا قال طلابنا
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <p className="text-xl text-gray-600 text-center max-w-3xl">
              شهادات طلابنا هي أفضل دليل على جودة التعليم في منصتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-green-50 rounded-2xl p-8 shadow-md relative"
              >
                <div className="absolute -top-4 right-8 text-green-500">
                  <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="pt-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "لقد كانت تجربتي مع منصة القرآن الكريم مميزة جداً، حيث تمكنت
                    من التعلم بطريقة سلسة وممتعة. الأساتذة متميزون والمحتوى
                    التعليمي شامل ومتنوع. أنصح بها بشدة لكل من يريد تعلم
                    القرآن."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img
                        src="/api/placeholder/100/100"
                        alt="صورة الطالب"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800">محمد أحمد</h4>
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section className="py-20 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              الأسئلة الشائعة
            </h2>
            <div className="w-16 h-1 bg-green-500 mb-6"></div>
            <p className="text-xl text-gray-600 text-center max-w-3xl">
              إجابات على الأسئلة الأكثر شيوعاً حول منصتنا وخدماتنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                كيف يمكنني التسجيل في المنصة؟
              </h3>
              <p className="text-gray-600">
                يمكنك التسجيل بسهولة من خلال النقر على زر "التسجيل" في الصفحة
                الرئيسية وإدخال بياناتك الشخصية، ثم اختيار خطة الاشتراك المناسبة
                لك.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                هل يمكنني الحصول على شهادة إجازة معتمدة؟
              </h3>
              <p className="text-gray-600">
                نعم، توفر المنصة برنامجاً متكاملاً للإجازة بالسند المتصل، ويتم
                منح الشهادات المعتمدة بعد اجتياز الاختبارات النهائية والتقييم من
                المشايخ.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                ما هي طرق الدفع المتاحة؟
              </h3>
              <p className="text-gray-600">
                نوفر مجموعة متنوعة من طرق الدفع الإلكتروني، بما في ذلك البطاقات
                الائتمانية والحوالات البنكية وخدمات الدفع الإلكتروني المختلفة.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                هل الدروس مباشرة أم مسجلة؟
              </h3>
              <p className="text-gray-600">
                نوفر نوعين من الدروس: دروس مسجلة يمكن مشاهدتها في أي وقت، ودروس
                مباشرة مع الأساتذة يمكن التفاعل معها والمشاركة فيها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم التواصل معنا مع زر الانتقال */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-green-700 to-green-900 text-white relative">
        <div className="absolute inset-0 bg-black opacity-10 pattern-diagonal-lines-sm"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-6">تواصل معنا</h2>
            <div className="w-16 h-1 bg-white mb-8"></div>
            <p className="text-xl mb-10 max-w-3xl">
              نحن هنا للإجابة على جميع استفساراتكم واقتراحاتكم، ونرحب بتواصلكم
              معنا من خلال قنوات الاتصال المختلفة
            </p>

            <div className="grid md:grid-cols-3 gap-8 w-full mb-12">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  البريد الإلكتروني
                </h3>
                <p className="text-center text-green-100">
                  info@quranplatform.com
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  رقم الهاتف
                </h3>
                <p className="text-center text-green-100">+966 50 123 4567</p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  وسائل التواصل
                </h3>
                <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                  <a
                    href="#"
                    className="text-white hover:text-green-200 transition-colors"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-green-200 transition-colors"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-green-200 transition-colors"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={goToContactPage}
              className="bg-white text-green-800 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-100 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30"
            >
              تواصل معنا الآن
            </button>
          </div>
        </div>
      </section>

      {/* قسم الخاتمة */}
      <footer className="bg-green-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-white rounded-full p-2 shadow-lg">
              <svg
                className="h-12 w-12 text-green-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            منصة القرآن الكريم التعليمية
          </h3>
          <p className="text-green-200 max-w-2xl mx-auto mb-6">
            طريقك نحو إتقان تلاوة القرآن الكريم وعلومه بطرق حديثة وميسرة
          </p>
          <div className="border-t border-green-700 pt-6 mt-6">
            <p>
              جميع الحقوق محفوظة © {new Date().getFullYear()} - منصة القرآن
              الكريم التعليمية
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}