import React, { useState } from 'react';

const BookConsultation = () => {
  const [childName, setChildName] = useState('');
  const [preferredStaff, setPreferredStaff] = useState('');
  const [preferredDateTime, setPreferredDateTime] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!childName || !preferredStaff || !preferredDateTime || !reason) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate sending data to the server
    console.log({
      childName,
      preferredStaff,
      preferredDateTime,
      reason
    });

    alert('Consultation booked successfully!');
    
    // Clear form
    setChildName('');
    setPreferredStaff('');
    setPreferredDateTime('');
    setReason('');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Book a Consultation</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name of Child</label>
          <input
            type="text"
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Aline Uwase"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Preferred Nurse/Doctor</label>
          <input
            type="text"
            value={preferredStaff}
            onChange={(e) => setPreferredStaff(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Nurse Diane"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Preferred Date & Time</label>
          <input
            type="datetime-local"
            value={preferredDateTime}
            onChange={(e) => setPreferredDateTime(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Reason for Consultation</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Briefly describe the issue..."
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Book Consultation
        </button>
      </form>
    </div>
  );
};

export default BookConsultation;
