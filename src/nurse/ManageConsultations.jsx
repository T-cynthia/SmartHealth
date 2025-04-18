import React, { useState, useEffect } from 'react';

const ManageConsultation = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    // Replace with real backend data fetch later
    const sampleConsultations = [
      {
        id: 1,
        parentName: 'Sarah',
        babyName: 'Ava',
        bookingDate: '2025-04-20',
        time: '10:00 AM',
        status: 'Pending',
      },
      {
        id: 2,
        parentName: 'John',
        babyName: 'Liam',
        bookingDate: '2025-04-22',
        time: '02:00 PM',
        status: 'Pending',
      },
    ];

    setConsultations(sampleConsultations);
  }, []);

  const handleAvailability = (id, isAvailable) => {
    const updatedConsultations = consultations.map((consultation) =>
      consultation.id === id
        ? { ...consultation, status: isAvailable ? 'Available' : 'Not Available' }
        : consultation
    );
    setConsultations(updatedConsultations);

    // Simulate sending notification to parent
    const statusMessage = isAvailable ? 'Your consultation has been accepted.' : 'Your consultation has been declined.';
    console.log(`Sending notification to ${id}: ${statusMessage}`);
    alert(`📩 Notification sent: ${statusMessage}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Manage Consultation Bookings</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-green-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Parent Name</th>
              <th className="px-4 py-2 text-left">Baby Name</th>
              <th className="px-4 py-2 text-left">Booking Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {consultations.map((consultation) => (
              <tr key={consultation.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-4">{consultation.parentName}</td>
                <td className="px-4 py-4">{consultation.babyName}</td>
                <td className="px-4 py-4">{consultation.bookingDate}</td>
                <td className="px-4 py-4">{consultation.time}</td>
                <td className="px-4 py-4">{consultation.status}</td>
                <td className="px-4 py-4">
                  <button
                    onClick={() => handleAvailability(consultation.id, true)}
                    className="bg-green-600 text-white text-sm px-3 py-1 rounded mr-2 mb-1 hover:bg-green-700"
                  >
                    Available
                  </button>
                  <button
                    onClick={() => handleAvailability(consultation.id, false)}
                    className="bg-red-600 text-white text-sm px-3 py-1 rounded mr-2 mb-1 hover:bg-red-700"
                  >
                    Not Available
                  </button>
                </td>
              </tr>
            ))}
            {!consultations.length && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">No consultations booked yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageConsultation;
