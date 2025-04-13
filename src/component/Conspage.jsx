import React, { useState } from 'react';

function ConsultationPage() {
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booked consultation with Dr. ${doctor} at ${time}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Book a Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Select Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Choose...</option>
              <option value="Smith">Dr. Smith</option>
              <option value="Johnson">Dr. Rosine</option>
              <option value="Williams">Dr. Williams</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Select Time</label>
            <input
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultationPage;
