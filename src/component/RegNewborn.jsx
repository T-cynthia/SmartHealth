import React, { useState } from 'react';

function RegisterNewborn() {
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    setMessage("🎉 Your newborn has been registered successfully!");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Register Newborn</h2>
      <button 
        onClick={handleRegister} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Register
      </button>

      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
}

export default RegisterNewborn;
