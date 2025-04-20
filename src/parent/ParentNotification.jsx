import React, { useState, useEffect } from 'react';

const ParentNotification = () => {
  // Example notifications (replace with real API call if needed)
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulated fetch — replace with real data later
    const mockNotifications = [
      {
        id: 1,
        title: 'Upcoming Vaccination',
        message: 'Your child has a scheduled vaccination on April 22nd at 10:00 AM.',
        from: 'Nurse Aline',
        date: '2025-04-17'
      },
      {
        id: 2,
        title: 'Consultation Reminder',
        message: 'Your consultation with Dr. Jean is scheduled for April 20th at 2:30 PM.',
        from: 'System',
        date: '2025-04-15'
      },
      {
        id: 3,
        title: 'Health Tip of the Week',
        message: 'Remember to always keep your newborn hydrated and breastfeed regularly.',
        from: 'Nurse Department',
        date: '2025-04-14'
      }
    ];
    setNotifications(mockNotifications);
  }, []);

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Your Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500">You have no notifications yet.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="bg-white p-5 rounded-md shadow-md border-l-4 border-blue-500"
            >
              <h3 className="text-lg font-semibold text-gray-800">{notif.title}</h3>
              <p className="text-gray-600">{notif.message}</p>
              <div className="text-sm text-gray-500 mt-2">
                From: {notif.from} • {notif.date}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ParentNotification;
