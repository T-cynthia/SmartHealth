import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Homepage';
import Register from './component/Regpage';
import ConsultationPage from './component/Conspage';
import RegisterNewborn from './component/RegNewborn';
import Navbar from './component/Navbar';
import VaccineTracker from './component/VaccineTracker';
import './component/global.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/regnewborn" element={<RegisterNewborn />} />
        <Route path="/vaccination" element={<VaccineTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
