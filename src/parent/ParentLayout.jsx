import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const ParentLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('parentLoggedIn');
    navigate('/');
  };

  return (
    <div className="bg-gray-100 flex">
      <aside className="fixed top-0 left-0 h-full w-64 bg-blue-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mt-20">Parent Panel</h1>
          <nav className="space-y-4">
            <Link to="/parent/dashboard" className="block hover:text-yellow-400 mt-10">Dashboard</Link>
            <Link to="/parent/healthy-tips" className="block hover:text-yellow-400">Healthy Tips</Link>
            <Link to="/parent/book-consultation" className="block hover:text-yellow-400">Book Consultation</Link>
            <Link to="/parent/certificate" className="block hover:text-yellow-400">Certificate</Link>
            <Link to="/parent/notifications" className="block hover:text-yellow-400">Notifications</Link>
          </nav>
        </div>

        <div className="mb-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ParentLayout;
