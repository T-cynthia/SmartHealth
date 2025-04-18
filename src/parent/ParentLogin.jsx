import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ParentLogin = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();  // Hook to navigate after login

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation (you can add more sophisticated logic here)
    if (fullName && phone) {
      console.log({ fullName, phone });
      // Redirect to the parent dashboard after successful login
      navigate('/parent/dashboard');
    } else {
      alert('Please enter both phone number and password');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-blue-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Parent Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Full Name Field (Optional) */}
          <div>
            <label className="block text-black mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your full name"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-black mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
              placeholder="e.g. +250 78XXXXXXX"
            />
          </div>

         

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 text-sm rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ParentLogin;
