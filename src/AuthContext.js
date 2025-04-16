// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use authentication context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider to wrap around the app to provide the auth context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state: no user logged in

  const login = (userData) => {
    setUser(userData); // Set user after login
  };

  const logout = () => {
    setUser(null); // Logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
