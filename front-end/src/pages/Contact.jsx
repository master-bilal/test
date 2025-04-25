import React, { useState } from "react";
import Contactimage from "../images/contact.png";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Status state
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Reset form fields
        setFormData({ name: "", email: "", message: "" });
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" },
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
          });
        }, 5000);
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: {
            error: true,
            msg: data.message || "Something went wrong. Please try again.",
          },
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "Network error. Please check your connection.",
        },
      });
    }
  };

  return (
    <div
      id="cont"
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16 gap-8"
    >
      {/* Left side with illustration */}
      <div className="contact-image w-full md:w-1/2">
        <img
          src={Contactimage}
          alt="Illustration of person sitting in chair with laptop and decorative elements"
          className="w-full max-w-lg mx-auto"
        />
      </div>

      {/* Right side with form */}
      <div className="contact-form w-full md:w-1/2 max-w-lg">
        <h1 className="text-4xl font-bold text-purple-500 mb-4">تواصل معنا</h1>
        <p className="text-gray-600 mb-8">
          My inbox is always open! 💌 Whether you've got a burning question or
          want to drop a friendly "hello", I'm all ears! 👂 Let's chat! 🐝
        </p>

        {/* Status message */}
        {status.info.msg && (
          <div
            className={`p-4 mb-4 rounded-lg ${
              status.info.error
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {status.info.msg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="الإسم*"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="الإيميل *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              placeholder="رسالتك *"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={status.submitting}
            className="bg-purple-500 text-white font-medium py-3 px-8 rounded-full hover:bg-purple-600 transition duration-300 disabled:bg-purple-300"
          >
            {status.submitting ? "جاري الإرسال..." : "إرسال 👋"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
