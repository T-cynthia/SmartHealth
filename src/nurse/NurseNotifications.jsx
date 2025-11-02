import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NurseNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/notifications');
        const adminNotifications = res.data;

        const formattedMessages = adminNotifications.map((note, index) => ({
          id: index + 1,
          message: `📢 ${note.message}`,
          date: new Date(note.date).toLocaleString()
        }));

        setNotifications(formattedMessages);
      } catch (err) {
        console.error('Failed to fetch notifications:', err);
        setNotifications([{ id: 0, message: "Error fetching notifications." }]);
      }
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
          <p className="text-gray-500">No new notifications today.</p>
        )}
      </div>
    </div>
  );
};

export default NurseNotifications;
