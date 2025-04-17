import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Register from './component/Regpage';
import ConsultationPage from './component/Conspage';
import RegisterNewborn from './component/RegNewborn';
import Payment from './component/Payment';
import PaymentSuccess from './component/PaymentSuccess';
import PaymentFailure from './component/PaymentFailure';
import VaccineTracker from './component/VaccineTracker';
import HealthTipsPage from './component/HealthTipsPage';
import ContactPage from './component/ContactPage';
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage';

// Admin
import AdminLogin from './admin/AdminLogin';
import Dashboard from './admin/Dashboard';
import ManageUsers from './admin/ManageUsers';
import ManageNurses from './admin/ManageNurse';
import ManageNewborns from './admin/ManageNewborns';
import ManageNotifications from './admin/ManageNotifications';
import AdminLayout from './admin/AdminLayout';
import ProtectedRoute from './admin/ProtectedRoute';

import './component/global.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Protected Routes */}
          <Route path="/consultation" element={<PrivateRoute element={<ConsultationPage />} />} />
          <Route path="/regnewborn" element={<PrivateRoute element={<RegisterNewborn />} />} />
          <Route path="/vaccination" element={<PrivateRoute element={<VaccineTracker />} />} />
          <Route path="/payment" element={<PrivateRoute element={<Payment />} />} />
          <Route path="/payment/success" element={<PrivateRoute element={<PaymentSuccess />} />} />
          <Route path="/payment/cancel" element={<PrivateRoute element={<PaymentFailure />} />} />
          <Route path="/health-tips" element={<PrivateRoute element={<HealthTipsPage />} />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="nurses" element={<ManageNurses />} />
            <Route path="newborns" element={<ManageNewborns />} />
            <Route path="notifications" element={<ManageNotifications />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
