// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import the AuthProvider
import Homepage from './component/Homepage'; 
import Register from './component/Regpage';
import ConsultationPage from './component/Conspage';
import RegisterNewborn from './component/RegNewborn';
import Payment from './component/Payment';
import PaymentSuccess from './component/PaymentSuccess';
import PaymentFailure from './component/PaymentFailure';
import Navbar from './component/Navbar';
import VaccineTracker from './component/VaccineTracker';
import HealthTipsPage from './component/HealthTipsPage';
import ContactPage from './component/ContactPage';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute
import LoginPage from './component/LoginPage';
import SignupPage from './component/SignupPage';

import './component/global.css'; 

function App() {
  return (
    <AuthProvider> {/* Wrap the app with AuthProvider to access authentication context */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/consultation" element={<PrivateRoute element={<ConsultationPage />} />} />
          <Route path="/regnewborn" element={<PrivateRoute element={<RegisterNewborn />} />} />
          <Route path="/vaccination" element={<PrivateRoute element={<VaccineTracker />} />} />
          <Route path="/payment" element={<PrivateRoute element={<Payment />} />} />
          <Route path="/payment/success" element={<PrivateRoute element={<PaymentSuccess />} />} />
          <Route path="/payment/cancel" element={<PrivateRoute element={<PaymentFailure />} />} />
          <Route path="/health-tips" element={<PrivateRoute element={<HealthTipsPage />} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
