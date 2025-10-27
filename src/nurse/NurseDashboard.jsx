import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const NurseDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-2">Welcome {user?.nurseName} 👋</h2>
      <p className="text-gray-600 mb-6">Here’s an overview of your daily activities and system shortcuts.</p>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">📋 Consultations Today</h3>
          <p className="text-2xl text-blue-600 font-bold">4</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">💉 Pending Vaccines</h3>
          <p className="text-2xl text-blue-600 font-bold">7</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">📨 Notifications</h3>
          <p className="text-2xl text-blue-600 font-bold">2 New</p>
        </div>
      </div>

      {/* Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Link to="/nurse/vaccinations" className="bg-green-100 hover:bg-green-200 p-4 rounded-lg shadow text-center">
          <h4 className="text-xl font-semibold mb-1">💉 Manage Vaccinations</h4>
          <p className="text-gray-700">Remind parents and update vaccination status.</p>
        </Link>
        <Link to="/nurse/consultations" className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg shadow text-center">
          <h4 className="text-xl font-semibold mb-1">📋 Manage Consultations</h4>
          <p className="text-gray-700">View and respond to parent bookings.</p>
        </Link>
        <Link to="/nurse/notifications" className="bg-purple-100 hover:bg-purple-200 p-4 rounded-lg shadow text-center">
          <h4 className="text-xl font-semibold mb-1">🔔 View Notifications</h4>
          <p className="text-gray-700">Check messages from Admin.</p>
        </Link>
      </div>

      {/* Recent Activity (Sample - replace with dynamic content later) */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-bold mb-4">🕒 Upcoming Vaccinations</h3>
        <ul className="space-y-2">
          <li className="flex justify-between border-b pb-2">
            <span>👶 Baby A (Polio)</span>
            <span className="text-sm text-gray-500">Today at 2:00 PM</span>
          </li>
          <li className="flex justify-between border-b pb-2">
            <span>👶 Baby B (Hepatitis B)</span>
            <span className="text-sm text-gray-500">Tomorrow at 10:00 AM</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">📢 Latest Notifications</h3>
        <ul className="space-y-2">
          <li className="text-gray-700">📝 Admin: Monthly report deadline is April 25th.</li>
          <li className="text-gray-700">📦 Vaccine stock has been restocked.</li>
        </ul>
      </div>
    </div>
  );
};

export default NurseDashboard;
