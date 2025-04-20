import React from 'react';
import { Navigate } from 'react-router-dom';

const ParentRoute = ({ children }) => {
  const isParentLoggedIn = localStorage.getItem('parentLoggedIn');

  return isParentLoggedIn ? children : <Navigate to="/parent/login" replace />;
};

export default ParentRoute;
