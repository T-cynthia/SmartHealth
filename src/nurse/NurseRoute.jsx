import React from 'react';
import { Navigate } from 'react-router-dom';

const NurseRoute = ({ children }) => {
  const isNurseLoggedIn = localStorage.getItem('NurseLoggedIn') === 'true';

  if (!isNurseLoggedIn) {
    return <Navigate to="/nurse/login" />;
  }

  return children;
};

export default NurseRoute;
