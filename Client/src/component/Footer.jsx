import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Image from "../images/Screenshot_2025-05-14_221916-removebg-preview.png";

// تأكد من تعيين عنصر التطبيق الرئيسي للمودال
Modal.setAppElement("#root");

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <footer className="bg-white shadow-inner py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-center md:items-end">
            <div className="mb-6">
              <img
                src={Image}
                alt="الفرقان"
                className="h-24 object-contain"
              />
            </div>
            <p className="text-gray-600 text-right leading-relaxed mb-8 text-base">
              منصة آياتنا لتعليم القرآن الكريم عن بعد هي منصة تفاعلية توفر بيئة
              آمنة تجمع بين المعلمين والمتعلمين عبر حلقات إلكترونية.
            </p>
            <div className="flex space-x-6 space-x-reverse">
              <Link
                to="#"
                className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaYoutube size={20} />
              </Link>
              <Link
                to="#"
                className="text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook size={20} />
              </Link>
            </div>
          </div>

          {/* Important Links Section */}
          <div className="text-right">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 relative after:content-[''] after:absolute after:right-0 after:-bottom-2 after:w-16 after:h-1 after:bg-green-500">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="aboutus"
                  className="text-gray-600 hover:text-green-500 transition-all duration-200 hover:pr-2 inline-block text-base"
                >
                  عن المنصة
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-green-500 transition-all duration-200 hover:pr-2 inline-block text-base"
                >
                  خدمات المنصة
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-green-500 transition-all duration-200 hover:pr-2 inline-block text-base"
                >
                  البرامج التعليمية
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-green-500 transition-all duration-200 hover:pr-2 inline-block text-base"
                >
                  المقرأة الإلكترونية
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-green-500 transition-all duration-200 hover:pr-2 inline-block text-base"
                >
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-600 hover:text-green-500 transition-all duration-200 hover:pr-2 inline-block text-base"
                >
                  تطبيق منصة الفرقان
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-right">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 relative after:content-[''] after:absolute after:right-0 after:-bottom-2 after:w-16 after:h-1 after:bg-green-500">
              تواصل معنا
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-end">
                <span className="text-gray-600 text-base">
                  الأردن - عمان - الدوار السابع
                </span>
                <div className="ml-3 text-green-500">
                  <MapPin size={20} />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="text-gray-600 font-medium text-base">
                  +962 780787293
                </span>
                <div className="ml-3 text-green-500">
                  <Phone size={20} />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <span className="text-gray-600 text-base">
                  Ayatuna@gmail.com
                </span>
                <div className="ml-3 text-green-500">
                  <Mail size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div className="text-right">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 relative after:content-[''] after:absolute after:right-0 after:-bottom-2 after:w-16 after:h-1 after:bg-green-500">
              الخصوصية
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => openModal("privacy")}
                  className="text-gray-600 hover:text-green-500 transition-all duration-200 hover:pr-2 inline-block text-base"
                >
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal("terms")}
                  className="text-gray-600 hover:text-green-500 transition-all duration-200 hover:pr-2 inline-block text-base"
                >
                  الشروط والأحكام
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-base">
            جميع الحقوق محفوظة لمنصة الفرقان © 2025
          </p>
        </div>
      </div>

      {/* Modal for Privacy Policy and Terms */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Privacy Policy or Terms Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="p-6 text-right">
          <h2 className="text-2xl font-bold mb-4">
            {modalContent === "privacy" ? "سياسة الخصوصية" : "الشروط والأحكام"}
          </h2>
          {modalContent === "privacy" ? (
            <div className="text-gray-700 space-y-4 text-base">
              <p>هنا يتم وضع نص سياسة الخصوصية الكامل...</p>
              <p>
                يمكنك إضافة فقرات متعددة هنا لتوضيح سياسة الخصوصية الخاصة
                بمنصتكم.
              </p>
              <p>تأكد من توافقها مع القوانين واللوائح المحلية والدولية.</p>
            </div>
          ) : (
            <div className="text-gray-700 space-y-4 text-base">
              <p>هنا يتم وضع نص الشروط والأحكام الكامل...</p>
              <p>
                يمكنك إضافة جميع الشروط التي يجب على المستخدمين الالتزام بها.
              </p>
              <p>تأكد من شمولية الشروط لجميع جوانب استخدام المنصة.</p>
            </div>
          )}
          <button
            onClick={closeModal}
            className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
          >
            إغلاق
          </button>
        </div>
      </Modal>

      <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          width: 80%;
          max-width: 700px;
          max-height: 80vh;
          overflow-y: auto;
          background: white;
          border-radius: 8px;
          outline: none;
          padding: 0;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
