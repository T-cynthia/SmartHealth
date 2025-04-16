// src/PrivateRoute.js
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== undefined) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="spinner-border animate-spin w-12 h-12 border-4 border-t-4 border-blue-600 rounded-full"></div>
      </div>
    );
  }

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
