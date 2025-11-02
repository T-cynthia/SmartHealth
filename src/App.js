import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import ContactPage from './component/ContactPage';
import AboutUs from './component/AboutUs';

// Admin
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ManageParents from './admin/ManageParents';
import ManageNurses from './admin/ManageNurse';
import ManageNewborns from './admin/ManageNewborns';
import ManageNotifications from './admin/ManageNotifications';
import AdminLayout from './admin/AdminLayout';
import ProtectedRoute from './admin/ProtectedRoute';

// Nurse
import NurseLogin from './nurse/NurseLogin';
import NurseRoute from './nurse/NurseRoute';
import NurseDashboard from './nurse/NurseDashboard';
import NurseLayout from './nurse/NurseLayout';
import Registrationform from './nurse/Regpage';
import NurseNotifications from './nurse/NurseNotifications';
import Vaccinations from './nurse/ManageVaccinations';
import Consultations from './nurse/ManageConsultations';

// Parent
import ParentDashboard from './parent/ParentDashboard';
import ParentLogin from './parent/ParentLogin';
import ParentLayout from './parent/ParentLayout';
import ParentRoute from './parent/ParentRoute';
import BookConsultation from './parent/BookConsultation';
import HealthyTips from './parent/HealthyTips';
import Certificate from './parent/Certificate';
import VaccinationCertificate from './parent/VaccinationCertificate';
import ParentNotification from './parent/ParentNotification';


import './component/global.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="parents" element={<ManageParents />} />
            <Route path="nurses" element={<ManageNurses />} />
            <Route path="newborns" element={<ManageNewborns />} />
            <Route path="notifications" element={<ManageNotifications />} />
          </Route>

          {/* Nurse Routes */}
          <Route path="/nurse/login" element={<NurseLogin />} />

          {/* Protected Nurse Routes */}
          <Route path="/nurse" element={<NurseRoute><NurseLayout /></NurseRoute>}>
            <Route path="dashboard" element={<NurseDashboard />} />
            <Route path="notifications" element={<NurseNotifications />} />
            <Route path="register" element={<Registrationform />} />
            <Route path="vaccinations" element={<Vaccinations />} />
            <Route path="consultations" element={<Consultations />} />
          </Route>



          {/* Parent Routes */}
          <Route path="/parent/login" element={<ParentLogin />} />
          <Route path="/parent" element={<ParentRoute> <ParentLayout /> </ParentRoute>}>
            <Route path="dashboard" element={<ParentDashboard />} />
            <Route path="book-consultation" element={<BookConsultation />} />
            <Route path="healthy-tips" element={<HealthyTips />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="vaccination-certificate" element={<VaccinationCertificate />} />
            <Route path="notifications" element={<ParentNotification />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
