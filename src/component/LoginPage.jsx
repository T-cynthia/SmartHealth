import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Import useAuth from AuthContext

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('nurse');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const { setUser } = useAuth(); // Access setUser from AuthContext

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (role === 'nurse') {
      try {
        console.log('📡 Sending login request:', { phone, password });

        const response = await axios.post('http://localhost:5000/api/nurse/login', {
          phone,
          password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('✅ Login response:', response.data);
        setSuccess(`Welcome ${response.data?.nurse?.nurseName || 'Nurse'}!`);

        // Save nurse info to localStorage (optional)
        localStorage.setItem('nurse', JSON.stringify(response.data.nurse));

        // Update the context with the logged-in user
        setUser(response.data.nurse); 

        // Redirect to the regnewborn page
        navigate('/regnewborn');
      } catch (err) {
        console.error('❌ Login error:', err.response?.data || err.message);
        setError(err.response?.data?.message || 'Login failed');
      }
    } else {
      setError('Only nurse login is implemented for now.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-blue-50 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Login to KiddoCare</h2>

        <form onSubmit={handleLogin} className="space-y-4">
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

          <div>
            <label className="block text-black mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 text-sm rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
