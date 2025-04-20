import React, { useState, useEffect } from 'react';

const ManageVaccinations = () => {
  const [babies, setBabies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/vaccines/all');
        const data = await res.json();
        // Ensure the response contains an array of babies
        if (Array.isArray(data)) {
          setBabies(data);
        } else {
          console.error("Received data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching vaccination data:", error);
      }
    };

    fetchData();
  }, []);

  const remindParent = (baby, vaccine) => {
    console.log(`Sending reminder for ${vaccine.name} to parent of ${baby.childName}`);
    alert(`📩 Reminder sent to ${baby.childName}'s parent for ${vaccine.name} (Due: ${new Date(vaccine.dueDate).toLocaleDateString()})`);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Vaccination Management</h1>

      <div className="space-y-8">
        {babies.length > 0 ? (
          babies.map((baby) => (
            <div key={baby._id} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">🧒 {baby.childName}'s Vaccination Board</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {baby.vaccines.map((vaccine, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded border-l-4 ${
                      vaccine.status === 'Completed' ? 'bg-green-100 border-green-600' : 'bg-yellow-100 border-yellow-500'
                    }`}
                  >
                    <p className="text-gray-800 font-medium">
                      💉 {vaccine.name} –{' '}
                      <span className="text-sm">
                        Due: {new Date(vaccine.dueDate).toLocaleDateString()}
                      </span>
                    </p>

                    <span
                      className={`inline-block mt-1 px-2 py-1 text-xs font-semibold rounded ${
                        vaccine.status === 'Completed' ? 'bg-green-600 text-white' : 'bg-yellow-500 text-white'
                      }`}
                    >
                      {vaccine.status}
                    </span>

                    {vaccine.status === 'Pending' && (
                      <div className="mt-2">
                        <button
                          onClick={() => remindParent(baby, vaccine)}
                          className="bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
                        >
                          Send Reminder
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">No vaccination records available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageVaccinations;
