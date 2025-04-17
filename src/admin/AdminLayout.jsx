import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col justify-between">
        {/* Top part: title + links */}
        <div>
          <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
          <nav className="space-y-4">
            <Link to="/admin/dashboard" className="block hover:text-yellow-400">Dashboard</Link>
            <Link to="/admin/users" className="block hover:text-yellow-400">Manage Users</Link>
            <Link to="/admin/nurses" className="block hover:text-yellow-400">Manage Nurses</Link>
            <Link to="/admin/newborns" className="block hover:text-yellow-400">Manage Newborns</Link>
            <Link to="/admin/notifications" className="block hover:text-yellow-400">Notifications</Link>
          </nav>
        </div>

        {/* Bottom part: logout */}
        <div className="mt-8 mb-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Right content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
