import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-2">Welcome Admin 👋</h2>
      <p className="text-gray-600 mb-6">Manage system data, monitor activities, and support users.</p>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">👩‍⚕️ Nurses Registered</h3>
          <p className="text-2xl text-blue-600 font-bold">12</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">👨‍👩‍👧 Parents Registered</h3>
          <p className="text-2xl text-blue-600 font-bold">35</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">💉 Total Vaccines</h3>
          <p className="text-2xl text-blue-600 font-bold">18 Types</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">📨 Unread Messages</h3>
          <p className="text-2xl text-blue-600 font-bold">5</p>
        </div>
      </div>

      {/* Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <Link to="/admin/nurses" className="bg-blue-100 hover:bg-blue-200 p-4 rounded-lg shadow text-center">
          <h4 className="text-xl font-semibold mb-1">👩‍⚕️ Manage Nurses</h4>
          <p className="text-gray-700">View, register, or deactivate nurses.</p>
        </Link>
        <Link to="/admin/parents" className="bg-green-100 hover:bg-green-200 p-4 rounded-lg shadow text-center">
          <h4 className="text-xl font-semibold mb-1">👨‍👩‍👧 Manage Parents</h4>
          <p className="text-gray-700">View parent accounts and baby profiles.</p>
        </Link>
        <Link to="/admin/notifications" className="bg-purple-100 hover:bg-purple-200 p-4 rounded-lg shadow text-center">
          <h4 className="text-xl font-semibold mb-1">📢 Send Notifications</h4>
          <p className="text-gray-700">Send messages to nurses or parents.</p>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">🆕 Recent Registrations</h3>
          <ul className="space-y-2">
            <li className="text-gray-700">👩‍⚕️ Nurse: Olivia M. – Registered today</li>
            <li className="text-gray-700">👨‍👩‍👧 Parent: John D. – 2 days ago</li>
            <li className="text-gray-700">👩‍⚕️ Nurse: Sarah K. – 4 days ago</li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">📅 Upcoming Consultations</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>👶 Baby Noah</span>
              <span className="text-sm text-gray-500">April 20, 10:00 AM</span>
            </li>
            <li className="flex justify-between">
              <span>👶 Baby Maya</span>
              <span className="text-sm text-gray-500">April 21, 3:30 PM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;