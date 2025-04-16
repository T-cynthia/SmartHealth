import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <Link to="/admin/dashboard" className="hover:text-blue-200">Dashboard</Link>
          <Link to="/admin/users" className="hover:text-blue-200">Manage Users</Link>
          <Link to="/admin/newborns" className="hover:text-blue-200">Newborns</Link>
          <Link to="/admin/vaccinations" className="hover:text-blue-200">Vaccinations</Link>
          <Link to="/admin/consultations" className="hover:text-blue-200">Consultations</Link>
          <Link to="/admin/notifications" className="hover:text-blue-200">Notifications</Link>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
