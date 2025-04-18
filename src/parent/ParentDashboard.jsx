import React, { useState, useEffect } from 'react';

import axios from 'axios'; // Make sure axios is installed
import HealthTipsPage from '../component/HealthTipsPage';

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('tips');
  const [babyData, setBabyData] = useState(null);

  // Fetch baby data when component loads
  useEffect(() => {
    const fetchBabyData = async () => {
      try {
        // Replace this URL with your real API endpoint
        const response = await axios.get('http://localhost:5000/api/parent/baby');
        setBabyData(response.data);
      } catch (error) {
        console.error('Failed to fetch baby data:', error);
      }
    };

    fetchBabyData();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'tips':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Health Tips</h2>
            <HealthTipsPage />
          </div>
        );
      case 'consultation':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-green-600">Book a Consultation</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Consultation booked successfully!');
              }}
              className="space-y-4 max-w-md"
            >
              <div>
                <label className="block mb-1 text-gray-700">Preferred Date</label>
                <input type="date" className="w-full p-2 border rounded" required />
              </div>
              <div>
                <label className="block mb-1 text-gray-700">Message (Optional)</label>
                <textarea className="w-full p-2 border rounded" placeholder="Write something..." />
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Book Now
              </button>
            </form>
          </div>
        );
      case 'certificate':
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-yellow-600">Baby Vaccination Certificate</h2>
            {!babyData ? (
              <p>Loading baby data...</p>
            ) : (
              <div className="bg-yellow-100 p-4 rounded shadow max-w-md">
                <p><strong>Name:</strong> {babyData.name}</p>
                <p><strong>Date of Birth:</strong> {babyData.dob}</p>
                <h3 className="mt-4 font-semibold">Vaccinations:</h3>
                <ul className="mt-2 space-y-2">
                  {babyData.vaccines.map((v, idx) => (
                    <li key={idx} className="p-2 bg-white rounded border border-yellow-300">
                      {v.name} – <span className="text-gray-600">{v.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col p-6">
        <h1 className="text-3xl font-bold mb-10">Parent Panel</h1>
        <button
          className={`mb-4 p-3 text-left rounded ${activeTab === 'tips' ? 'bg-white text-blue-900 font-bold' : 'hover:bg-blue-700'}`}
          onClick={() => setActiveTab('tips')}
        >
          🧠 Health Tips
        </button>
        <button
          className={`mb-4 p-3 text-left rounded ${activeTab === 'consultation' ? 'bg-white text-blue-900 font-bold' : 'hover:bg-blue-700'}`}
          onClick={() => setActiveTab('consultation')}
        >
          📅 Book Consultation
        </button>
        <button
          className={`mb-4 p-3 text-left rounded ${activeTab === 'certificate' ? 'bg-white text-blue-900 font-bold' : 'hover:bg-blue-700'}`}
          onClick={() => setActiveTab('certificate')}
        >
          📜 Certificate
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 bg-gray-50 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default ParentDashboard;
