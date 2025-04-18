import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/');
  };

  return (
    <div className="bg-gray-100 flex">
      {/* Fixed Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-blue-900 text-white p-6 flex flex-col justify-between">
        {/* Top part: title + links */}
        <div>
          <h1 className="text-2xl font-bold mt-20">Admin Panel</h1>
          <nav className="space-y-4">
            <Link to="/admin/dashboard" className="block hover:text-yellow-400 mt-10">Dashboard</Link>
            <Link to="/admin/nurses" className="block hover:text-yellow-400">Manage Nurses</Link>
            <Link to="/admin/parents" className="block hover:text-yellow-400">Manage Parents</Link>
            <Link to="/admin/newborns" className="block hover:text-yellow-400">Manage Newborns</Link>
            <Link to="/admin/notifications" className="block hover:text-yellow-400">Notifications</Link>
          </nav>
        </div>

        {/* Bottom part: logout */}
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

export default AdminLayout;
