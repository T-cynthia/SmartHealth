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
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Nurse Notifications</h2>

      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((note) => (
            <div
              key={note.id}
              className="bg-white p-5 rounded-md shadow-md border-l-4 border-blue-500"
            >
              <p className="text-gray-800">{note.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default NurseNotifications;
