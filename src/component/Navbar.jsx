import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const toggleLoginMenu = () => {
    setShowLoginMenu(!showLoginMenu);
  };

  const closeMenu = () => {
    setShowLoginMenu(false);
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">KiddoCare</Link>
        <div className="space-x-6 relative">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</Link>

          {/* Login Dropdown */}
          <button
            onClick={toggleLoginMenu}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500"
          >
            Login
          </button>

          {showLoginMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-50">
              <Link
                to="/login"
                onClick={closeMenu}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Parent/Nurse Login
              </Link>
              <Link
                to="/admin/login"
                onClick={closeMenu}
                className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              >
                Admin Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
