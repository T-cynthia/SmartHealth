// src/component/ContactPage.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send form data to EmailJS
    emailjs.sendForm(
      'service_6pe13hr', 
      'template_tyvlarp', 
      e.target, 
      'JyXfs2NTf3RTLdPy9' 
    )
    

      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          alert(`Thanks ${form.name}! We received your message.`);
        },
        (error) => {
          console.log('Error sending Message:', error.text); 
          alert(`Error: ${error.text}`);  
        }
      );
  
    // Clear form
    setForm({ name: '', phone: '', message: '' });
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">📬 Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input type="telephone" name="form" value={form.phone} onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all"
          >
            Send Message 💌
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
