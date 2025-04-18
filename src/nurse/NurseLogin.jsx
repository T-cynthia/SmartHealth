import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NurseLogin = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const nursePhone = '+250788931242';
    const nursePassword = 'nurse123';

    if (phone === nursePhone && password === nursePassword) {
      localStorage.setItem('NurseLoggedIn', 'true');
      navigate('/nurse/dashboard'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Nurse Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 mb-2">Phone number</label>
            <input type="phone" id="phone" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g +2507XXXXXXXX" required  />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
            <input type="password" id="password" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default NurseLogin;
