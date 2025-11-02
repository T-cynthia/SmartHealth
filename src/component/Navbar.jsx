import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const toggleLoginMenu = () => setShowLoginMenu(!showLoginMenu);
  const closeMenu = () => setShowLoginMenu(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center h-12">
        {/* Brand */}
        <Link to="/" className="text-lg font-bold text-blue-600">
          KiddoCare
        </Link>

        {/* Navigation */}
        <div className="space-x-4 relative flex items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 text-sm transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 text-sm transition"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="text-gray-800 hover:text-blue-600 font-medium text-sm"
          >
            Contact
          </Link>

          {/* Login Dropdown */}
{/* Login Dropdown */}
<div className="relative">
  <button
    onClick={toggleLoginMenu}
    className="bg-blue-600 text-white px-3 h-8 text-sm rounded hover:bg-blue-500 transition-all duration-200 flex items-center justify-center"
  >
    Login
  </button>

  {showLoginMenu && (
    <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <Link
        to="/admin/login"
        onClick={closeMenu}
        className="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-sm"
      >
        Admin Login
      </Link>
      <Link
        to="/nurse/login"
        onClick={closeMenu}
        className="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-sm"
      >
        Nurse Login
      </Link>
      <Link
        to="/parent/login"
        onClick={closeMenu}
        className="block px-4 py-2 text-gray-800 hover:bg-blue-100 text-sm"
      >
        Parent Login
      </Link>
  

    </div>
  )}
</div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
