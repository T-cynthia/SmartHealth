import React, { useState } from 'react';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('parent');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // handle login logic here
    console.log({ phone, role, password });
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
            <label className="block text-black mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="parent">Parent</option>
              <option value="nurse">Nurse / Doctor</option>
            </select>
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
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
