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
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import Users from './admin/ManageUsers';
import Newborns from './admin/ManageNewborns';
import Vaccinations from './admin/ManageVaccinations';
import Consultations from './admin/ManageConsultations';
import Notifications from './admin/ManageNotifications';

import './component/global.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public */}
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Protected */}
          <Route path="/consultation" element={<PrivateRoute element={<ConsultationPage />} />} />
          <Route path="/regnewborn" element={<PrivateRoute element={<RegisterNewborn />} />} />
          <Route path="/vaccination" element={<PrivateRoute element={<VaccineTracker />} />} />
          <Route path="/payment" element={<PrivateRoute element={<Payment />} />} />
          <Route path="/payment/success" element={<PrivateRoute element={<PaymentSuccess />} />} />
          <Route path="/payment/cancel" element={<PrivateRoute element={<PaymentFailure />} />} />
          <Route path="/health-tips" element={<PrivateRoute element={<HealthTipsPage />} />} />

          {/* Admin with nested routes */}
          <Route path="/admin" element={<PrivateRoute element={<AdminLayout />} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="newborns" element={<Newborns />} />
            <Route path="vaccinations" element={<Vaccinations />} />
            <Route path="consultations" element={<Consultations />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
