import React from 'react';

const ManageConsultations = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Manage Consultations</h1>
      <table className="w-full table-auto border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-yellow-600 text-white">
            <th className="px-4 py-2">Parent</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td className="border px-4 py-2">Jane Doe</td>
            <td className="border px-4 py-2">How often should I feed the baby?</td>
            <td className="border px-4 py-2">2025-03-05</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageConsultations;
