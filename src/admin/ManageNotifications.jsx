import React from 'react';

const ManageNotifications = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Manage Notifications</h1>
      <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Notification Title</label>
          <input type="text" className="w-full border px-4 py-2 rounded" placeholder="E.g. Upcoming vaccine" />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Message</label>
          <textarea className="w-full border px-4 py-2 rounded" rows="4" placeholder="Enter notification message..."></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send Notification</button>
      </form>
    </div>
  );
};

export default ManageNotifications;
