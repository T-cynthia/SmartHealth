import React, { useState, useEffect } from 'react';

const ManageVaccinations = () => {
  const [babies, setBabies] = useState([]);

  useEffect(() => {
    // Replace with real backend data fetch later
    const sampleData = [
      {
        id: 1,
        name: 'Ava',
        parentId: 101,
        vaccines: [
          { name: 'BCG', dueDate: '2025-04-20' },
          { name: 'Polio', dueDate: '2025-04-28' },
        ],
      },
      {
        id: 2,
        name: 'Liam',
        parentId: 102,
        vaccines: [
          { name: 'Hepatitis B', dueDate: '2025-05-02' },
          { name: 'Measles', dueDate: '2025-06-10' },
        ],
      },
    ];
    setBabies(sampleData);
  }, []);

  const remindParent = (baby, vaccine) => {
    // Simulate sending notification
    console.log(`Sending reminder for ${vaccine.name} to parent of ${baby.name}`);
    alert(`📩 Reminder sent to ${baby.name}'s parent for ${vaccine.name} (Due: ${vaccine.dueDate})`);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Vaccination Management</h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-green-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Baby Name</th>
              <th className="px-4 py-2 text-left">Vaccines</th>
            </tr>
          </thead>
          <tbody>
            {babies.map((baby) => (
              <tr key={baby.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-4 font-medium">{baby.name}</td>
                <td className="px-4 py-4 space-y-2">
                  {baby.vaccines.map((vaccine, index) => (
                    <button
                      key={index}
                      onClick={() => remindParent(baby, vaccine)}
                      className="bg-blue-600 text-white text-sm px-3 py-1 rounded mr-2 mb-1 hover:bg-blue-700"
                    >
                      {vaccine.name} (Due: {vaccine.dueDate})
                    </button>
                  ))}
                </td>
              </tr>
            ))}
            {!babies.length && (
              <tr>
                <td colSpan="2" className="text-center py-6 text-gray-500">No baby data available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageVaccinations;
