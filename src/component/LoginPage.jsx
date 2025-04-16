// src/component/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    navigate('/'); // Redirect to home page after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 px-4 py-10">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">Login to Your Account</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-teal-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-teal-300 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
          >
            Login
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-teal-600 hover:text-teal-700">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
