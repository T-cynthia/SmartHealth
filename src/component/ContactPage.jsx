// src/component/ContactPage.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6pe13hr",
        "template_tyvlarp",
        e.target,
        "JyXfs2NTf3RTLdPy9"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert(`Thanks ${form.name}! We received your message.`);
        },
        (error) => {
          console.log("Error sending Message:", error.text);
          alert(`Error: ${error.text}`);
        }
      );

    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-3">
      <div className="bg-white rounded-xl shadow-lg p-5 sm:p-6 w-full max-w-xs">
        <h2 className="text-xl font-semibold text-blue-700 mb-3 text-center">
          📬 Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-2.5 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-2.5 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 text-sm">
              Message
            </label>
            <textarea
              name="message"
              rows="2"
              value={form.message}
              onChange={handleChange}
              className="w-full px-2.5 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200"
          >
            Send 💌
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
