import React, { useState } from "react";

const Payment = () => {
  // Sample selected course data (this would typically come from props or context)
  const selectedCourse = {
    id: 1,
    title: "دورة التجويد المتقدمة",
    instructor: "د. بسمة أحمد",
    price: "20 د.ا",
    image: "/api/placeholder/150/150",
    icon: "/api/placeholder/30/30",
    duration: "3 أشهر",
    lessons: 24,
  };

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  // Form state
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expDate: "",
    cvv: "",
    email: "",
    phone: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment logic would go here
    alert("تمت عملية الدفع بنجاح!");
  };

  return (
    <div dir="rtl" className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-10">
        صفحة الدفع
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Course Summary - Right Side */}
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 sticky top-10">
            <h2 className="text-xl font-bold text-green-700 mb-4 border-b pb-3">
              ملخص الطلب
            </h2>

            {/* Selected Course Card */}
            <div className="flex mb-4">
              <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mr-4 flex-1">
                <h3 className="font-bold text-gray-800">
                  {selectedCourse.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedCourse.instructor}
                </p>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <span className="ml-3">
                    <i className="fas fa-clock ml-1"></i>
                    {selectedCourse.duration}
                  </span>
                  <span>
                    <i className="fas fa-book ml-1"></i>
                    {selectedCourse.lessons} درس
                  </span>
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="border-t border-b py-3 my-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">سعر الدورة</span>
                <span>{selectedCourse.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الضريبة</span>
                <span>0 د.ا</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between pt-2 font-bold">
              <span className="text-lg">المجموع</span>
              <span className="text-green-600 text-lg">
                {selectedCourse.price}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Form - Left Side */}
        <div className="lg:col-span-2 order-1 lg:order-2">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-bold text-green-700 mb-6 border-b pb-3">
              تفاصيل الدفع
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3">
                  معلومات التواصل
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3">طريقة الدفع</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("creditCard")}
                    className={`flex items-center justify-center px-4 py-3 border ${
                      paymentMethod === "creditCard"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    } rounded-md focus:outline-none`}
                  >
                    <img
                      src="/api/placeholder/24/24"
                      alt="Credit Card"
                      className="w-6 h-6 ml-2"
                    />
                    <span>بطاقة إئتمانية</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`flex items-center justify-center px-4 py-3 border ${
                      paymentMethod === "paypal"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    } rounded-md focus:outline-none`}
                  >
                    <img
                      src="/api/placeholder/24/24"
                      alt="PayPal"
                      className="w-6 h-6 ml-2"
                    />
                    <span>باي بال</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bankTransfer")}
                    className={`flex items-center justify-center px-4 py-3 border ${
                      paymentMethod === "bankTransfer"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-300"
                    } rounded-md focus:outline-none`}
                  >
                    <img
                      src="/api/placeholder/24/24"
                      alt="Bank Transfer"
                      className="w-6 h-6 ml-2"
                    />
                    <span>تحويل بنكي</span>
                  </button>
                </div>

                {/* Credit Card Details */}
                {paymentMethod === "creditCard" && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        رقم البطاقة
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">
                        اسم حامل البطاقة
                      </label>
                      <input
                        type="text"
                        name="cardHolder"
                        value={formData.cardHolder}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">
                          تاريخ الإنتهاء
                        </label>
                        <input
                          type="text"
                          name="expDate"
                          value={formData.expDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">
                          رمز الأمان (CVV)
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="XXX"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* PayPal Instructions */}
                {paymentMethod === "paypal" && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-700">
                      سيتم تحويلك إلى موقع باي بال لإتمام عملية الدفع بعد الضغط
                      على زر "إتمام الدفع".
                    </p>
                  </div>
                )}

                {/* Bank Transfer Instructions */}
                {paymentMethod === "bankTransfer" && (
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p className="text-gray-700 mb-2">
                      يرجى تحويل المبلغ إلى الحساب التالي:
                    </p>
                    <p className="mb-1">
                      <strong>اسم البنك:</strong> البنك الإسلامي الأردني
                    </p>
                    <p className="mb-1">
                      <strong>اسم الحساب:</strong> مركز التعليم الإسلامي
                    </p>
                    <p className="mb-1">
                      <strong>رقم الحساب:</strong> 1234567890
                    </p>
                    <p className="mb-1">
                      <strong>IBAN:</strong> JO12 ABCD 1234 5678 9012 3456 7890
                    </p>
                    <p className="mt-3 text-gray-600">
                      بعد إتمام التحويل، يرجى إرسال صورة من إيصال التحويل إلى
                      البريد الإلكتروني: payments@example.com
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  إتمام الدفع
                </button>
                <p className="text-center text-gray-600 text-sm mt-3">
                  بالضغط على "إتمام الدفع" فإنك توافق على
                  <a href="#" className="text-green-600 mr-1 hover:underline">
                    الشروط والأحكام
                  </a>
                  و
                  <a href="#" className="text-green-600 mr-1 hover:underline">
                    سياسة الخصوصية
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
