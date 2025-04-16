import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConsultationPage = () => {
  const [doctor, setDoctor] = useState('');
  const [time, setTime] = useState('');
  const [isAvailable, setIsAvailable] = useState(null);
  const amount = 80;
  const navigate = useNavigate();

  const doctorAvailability = {
    "Dr. Charma": ["2025-04-17T10:00", "2025-04-17T14:00"],
    "Dr. Rosine": ["2025-04-18T09:00", "2025-04-18T11:00"],
    "Dr. Williams": ["2025-04-19T13:00", "2025-04-19T15:00"],
    "Dr. Makombe": ["2025-04-20T10:00"],
    "Dr. Eric": ["2025-04-21T16:00"],
  };

  const handleCheckAvailability = (e) => {
    e.preventDefault();

    if (!doctor || !time) {
      alert('Please select a doctor and appointment time.');
      return;
    }

    const availableSlots = doctorAvailability[doctor] || [];
    const selectedTime = new Date(time).toISOString(); // Use the full ISO string

    // Check if the selected time matches any available slot
    const available = availableSlots.some(
      (slot) => new Date(slot).toISOString() === selectedTime
    );

    setIsAvailable(available);
  };

  const handleProceedToPayment = () => {
    navigate('/payment', {
      state: { doctor, time, amount },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Book a Consultation</h2>

        <form onSubmit={handleCheckAvailability} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-1">Select Doctor</label>
            <select
              value={doctor}
              onChange={(e) => {
                setDoctor(e.target.value);
                setIsAvailable(null);
              }}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            >
              <option value="">Choose a doctor...</option>
              <option value="Dr. Charma">Dr. Charma</option>
              <option value="Dr. Rosine">Dr. Rosine</option>
              <option value="Dr. Williams">Dr. Williams</option>
              <option value="Dr. Makombe">Dr. Makombe</option>
              <option value="Dr. Eric">Dr. Eric</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Select Time</label>
            <input
              type="datetime-local"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                setIsAvailable(null);
              }}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book Consultation
          </button>

          {isAvailable === true && (
            <div className="text-green-700 text-center">
              Doctor is available at selected time.
              <button
                onClick={handleProceedToPayment}
                className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
              >
                Proceed to Payment (${amount})
              </button>
            </div>
          )}

          {isAvailable === false && (
            <p className="text-red-600 text-center mt-4">
              Doctor is not available at that time. Please choose another time.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConsultationPage;
