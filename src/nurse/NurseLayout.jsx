import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';

const NurseLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('nurseLoggedIn');
    navigate('/nurse/login');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col justify-between">
        {/* Top part: title + links */}
        <div>
          <h1 className="text-2xl font-bold mb-8">Nurse Panel</h1>
          <nav className="space-y-4">
            <Link to="/nurse/dashboard" className="block hover:text-yellow-400">Dashboard</Link>
            <Link to="/nurse/register" className="block hover:text-yellow-400">Register Newborns</Link>
            <Link to="/nurse/newborns" className="block hover:text-yellow-400">Manage Vaccination</Link>
            <Link to="/nurse/consultation" className="block hover:text-yellow-400">Manage Consultation</Link>
            <Link to="/nurse/notifications" className="block hover:text-yellow-400">Notifications</Link>
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

export default NurseLayout;
