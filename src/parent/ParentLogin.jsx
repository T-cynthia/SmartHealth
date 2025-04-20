import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ParentLogin = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('http://localhost:5000/api/newborns/parent', {
        name: fullName,
        phone,
      });
  
      if (res.data.length > 0) {
        // Save parent credentials
        localStorage.setItem('parentLoggedIn', 'true');
        localStorage.setItem('parent', JSON.stringify({
          name: fullName,
          phone,
        }));
  
        // Redirect
        navigate('/parent/dashboard');
      } else {
        alert('No baby found for this parent.');
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Something went wrong. Please try again.');
    }
  };
  

  return (
    <div className="flex items-center justify-center mt-20 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Parent Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-black mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="Your full name"
              required
            />
          </div>

          <div>
            <label className="block text-black mb-1">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              placeholder="e.g. 078XXXXXXX"
              required
            />
          </div>

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
