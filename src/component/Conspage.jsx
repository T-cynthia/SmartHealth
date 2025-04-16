import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConsultationPage = () => {
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');
  const amount = 80; // Fixed price
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!doctor || !time) {
      alert('Please select a doctor and appointment time.');
      return;
    }

    navigate('/payment', {
      state: { doctor, time, amount },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Book a Consultation</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Select Doctor</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Choose a doctor...</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Rosine">Dr. Rosine</option>
              <option value="Dr. Williams">Dr. Williams</option>
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Proceed to Payment (${amount})
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPage;
