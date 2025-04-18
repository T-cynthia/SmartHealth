import React, { useEffect, useState } from 'react';

const NurseNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // This would be replaced with real backend fetch
    const fetchNotifications = async () => {
      // Simulated example data
      const mockData = [
        { id: 1, message: "New baby registered at 2:00 PM" },
        { id: 2, message: "Reminder: Submit today's records by 5:00 PM" },
      ];
      setNotifications(mockData);
    };

    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Nurse Notifications</h2>
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow">
        {notifications.length > 0 ? (
          notifications.map((note) => (
            <div key={note.id} className="bg-blue-50 p-4 mb-3 rounded border border-blue-200">
              <p className="text-gray-800">{note.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default NurseNotifications;
