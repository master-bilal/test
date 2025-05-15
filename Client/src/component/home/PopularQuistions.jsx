export default function PopularQuistions(){
    return (
      <>
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
                  الرئيسية وإدخال بياناتك الشخصية، ثم اختيار خطة الاشتراك
                  المناسبة لك.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  هل يمكنني الحصول على شهادة إجازة معتمدة؟
                </h3>
                <p className="text-gray-600">
                  نعم، توفر المنصة برنامجاً متكاملاً للإجازة بالسند المتصل، ويتم
                  منح الشهادات المعتمدة بعد اجتياز الاختبارات النهائية والتقييم
                  من المشايخ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  ما هي طرق الدفع المتاحة؟
                </h3>
                <p className="text-gray-600">
                  نوفر مجموعة متنوعة من طرق الدفع الإلكتروني، بما في ذلك
                  البطاقات الائتمانية والحوالات البنكية وخدمات الدفع الإلكتروني
                  المختلفة.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  هل الدروس مباشرة أم مسجلة؟
                </h3>
                <p className="text-gray-600">
                  نوفر نوعين من الدروس: دروس مسجلة يمكن مشاهدتها في أي وقت،
                  ودروس مباشرة مع الأساتذة يمكن التفاعل معها والمشاركة فيها.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}