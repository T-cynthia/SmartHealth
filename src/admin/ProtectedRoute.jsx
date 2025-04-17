import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAdminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';

  if (!isAdminLoggedIn) {
    // If not logged in, redirect to login page
    return <Navigate to="/admin/login" />;
  }

  return children;
};

export default ProtectedRoute;
