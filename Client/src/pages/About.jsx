import React from 'react';
import image from "../images/download (5).jpg";
import image2 from "../images/astaz.jpg"
export default function AboutUsModern() {
  // وظيفة التوجيه إلى صفحة الاتصال
  const goToContactPage = () => {
    window.location.href = "/contactus";
  };

  return (
    <div className=" text-right bg-white" dir="rtl">
      <section className="relative py-24 overflow-hidden">
        {/* خلفية متحركة */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute -left-20 -top-20 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-xl"
            style={{
              animation: "float 15s infinite alternate ease-in-out",
            }}
          ></div>
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-xl"
            style={{
              animation: "float 18s infinite alternate-reverse ease-in-out",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* العنوان الرئيسي */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="relative inline-block">
                <span className="relative z-10">منصتنا</span>
                <span
                  className="absolute bottom-0 left-0 w-full h-3 bg-green-600/30 z-0"
                  style={{
                    animation: "underlineGrow 1.5s ease-out forwards",
                  }}
                ></span>
              </span>
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تجربة تعليمية فريدة تجمع بين الأصالة والتقنية الحديثة
            </p>
          </div>

          {/* الصف الأول */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            {/* الصورة مع أنيميشن */}
            <div className="lg:w-1/2 relative group">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:shadow-3xl"
                style={{
                  animation: "fadeInLeft 1s ease-out forwards",
                }}
              >
                <img
                  src={image}
                  alt="واجهة المنصة"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* عنصر متحرك على الصورة */}
              </div>
            </div>

            {/* النص مع أنيميشن */}
            <div
              className="lg:w-1/2"
              style={{
                animation: "fadeInRight 1s ease-out forwards",
              }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                عن منصة
                <span className="text-3xl font-bold text-green-600 mb-6">
                  {" "}
                  آياتِنا
                </span>
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                منصة آياتِنا هي منصة تعليمية تفاعلية متخصصة في تعليم القرآن
                الكريم عن بُعد، تجمع بين التقنية الحديثة والتعليم التقليدي
                لتوفير تجربة تعليمية مميزة وآمنة. تربط بين الطلاب والمعلمين في
                قاعات افتراضية، مما يتيح التعلم بالصوت والصورة بشكل رائع.{" "}
              </p>
            </div>
          </div>

          {/* الصف الثاني (معكوس) */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* الصورة مع أنيميشن */}
            <div className="lg:w-1/2 relative group">
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:shadow-3xl"
                style={{
                  animation: "fadeInRight 1s ease-out forwards",
                }}
              >
                <img
                  src={image}
                  alt="ميزات المنصة"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* عنصر متحرك على الصورة */}
              </div>
            </div>

            {/* النص مع أنيميشن */}
            <div
              className="lg:w-1/2"
              style={{
                animation: "fadeInLeft 1s ease-out forwards",
              }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                أهدافنا{" "}
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-600 p-1 rounded-full mr-4 mt-1">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    توفير بيئة تعليمية آمنة وشاملة لتعليم القرآن الكريم وعلومه
                    عن بُعد.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 p-1 rounded-full mr-4 mt-1">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    تمكين الطلاب من تحسين التلاوة والتجويد بإشراف أساتذة
                    متخصصين.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-600 p-1 rounded-full mr-4 mt-1">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    استخدام أدوات تعليمية حديثة لتسهيل التعلم وتطوير المستوى
                    القرآني.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* تعريفات الأنيميشن */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-20px, 20px);
            }
          }
          @keyframes underlineGrow {
            0% {
              width: 0;
            }
            100% {
              width: 100%;
            }
          }
          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInRight {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          @keyframes pulse {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.9;
            }
          }
        `}</style>
      </section>
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
                    src={image2}
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
    </div>
  );
}