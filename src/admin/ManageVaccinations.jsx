import React from 'react';

const ManageVaccinations = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Manage Vaccinations</h1>
      <table className="w-full table-auto border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="px-4 py-2">Baby</th>
            <th className="px-4 py-2">Vaccine</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td className="border px-4 py-2">Baby Cynthia</td>
            <td className="border px-4 py-2">Polio</td>
            <td className="border px-4 py-2">2025-02-01</td>
            <td className="border px-4 py-2 text-green-600 font-semibold">Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageVaccinations;
