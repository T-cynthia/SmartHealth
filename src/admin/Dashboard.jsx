import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Users</h2>
          <p className="text-gray-600">23</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Newborns</h2>
          <p className="text-gray-600">15</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Vaccinations</h2>
          <p className="text-gray-600">40</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold">Consultations</h2>
          <p className="text-gray-600">10</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
