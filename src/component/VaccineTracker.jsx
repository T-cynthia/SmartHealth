import React from 'react';

const vaccines = [
  { name: "BCG", due: "2025-04-01", status: "Completed" },
  { name: "Polio (OPV 0)", due: "2025-04-03", status: "Completed" },
  { name: "DTP 1", due: "2025-05-01", status: "Upcoming" },
  { name: "Hepatitis B", due: "2025-05-01", status: "Upcoming" },
];

const VaccineTracker = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Vaccination Tracker
        </h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="p-4 border-b">Vaccine Name</th>
                <th className="p-4 border-b">Due Date</th>
                <th className="p-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {vaccines.map((vaccine, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-4 border-b">{vaccine.name}</td>
                  <td className="p-4 border-b">{vaccine.due}</td>
                  <td className={`p-4 border-b font-semibold ${vaccine.status === "Completed" ? "text-green-600" : "text-orange-500"}`}>
                    {vaccine.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VaccineTracker;
