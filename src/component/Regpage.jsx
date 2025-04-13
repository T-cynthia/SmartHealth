import React, { useState } from 'react';

function RegistrationPage() {
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Set the success message
    setSuccessMessage(`🎉 Newborn ${childName} has been registered successfully by ${parentName}!`);

    // Clear form fields
    setParentName('');
    setChildName('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Register Newborn</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Parent's Name</label>
            <input
              type="text"
              value={parentName}
              onChange={(e) => setParentName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Child's Name</label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Register Now
          </button>
        </form>

        {successMessage && (
          <p className="text-green-700 text-center mt-4 font-medium">{successMessage}</p>
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;
