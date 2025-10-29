import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParentDashboard = () => {
  const [baby, setBaby] = useState(null);
  const [parent, setParent] = useState(null);

  useEffect(() => {
    const storedParent = JSON.parse(localStorage.getItem('parent'));
    setParent(storedParent);

    if (storedParent) {
      axios
        .post('http://localhost:5000/api/newborns/parent', {
          name: storedParent.name,
          phone: storedParent.phone,
        })
        .then((res) => {
          setBaby(res.data[0]); // Display first baby
        })
        .catch((err) => {
          console.error('Error fetching baby data:', err);
        });
    }
  }, []);

  // Calculate age
  const calculateAge = (dob) => {
    if (!dob) return '';
    const birthDate = new Date(dob);
    const today = new Date();
    const months = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''} ` : ''}${remainingMonths} mo`;
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Welcome {parent?.name} 👨‍👩‍👧</h2>
      <p className="text-gray-600 mb-6">Here’s a quick overview of your child’s health schedule and activity.</p>

      {baby ? (
        <>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-2">Baby Name</h3>
              <p>{baby.childName}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-2">Date of Birth</h3>
              <p>{new Date(baby.dob).toLocaleDateString()}</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-blue-600 mb-2">Age</h3>
              <p>{calculateAge(baby.dob)}</p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Upcoming Vaccinations</h3>
            <ul className="list-disc ml-6 text-gray-700">
              {baby.vaccines?.filter(v => v.status === 'Upcoming').map((v, i) => (
                <li key={i}>{v.name} - {new Date(v.dueDate).toLocaleDateString()}</li>
              ))}
              {baby.vaccines?.filter(v => v.status === 'Upcoming').length === 0 && <li>No upcoming vaccines.</li>}
            </ul>
          </div>
        </>
      ) : (
        <p className="text-red-500">No baby data found for this parent.</p>
      )}

      {/* Notifications */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Notifications from Nurse</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Your child’s next check-up is due soon.</li>
          <li>New vaccine reminder sent recently.</li>
        </ul>
      </div>

      {/* Bookings */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Consultation Bookings</h3>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="border-b p-2">Date</th>
              <th className="border-b p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">April 22, 2025</td>
              <td className="p-2 text-green-600 font-semibold">Approved</td>
            </tr>
            <tr>
              <td className="p-2">April 30, 2025</td>
              <td className="p-2 text-yellow-600 font-semibold">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Health Tips */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Health Tips for Your Baby</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Breastfeeding is recommended exclusively for the first 6 months.</li>
          <li>Ensure your baby sleeps on their back to reduce risk of SIDS.</li>
          <li>Track your baby's developmental milestones regularly.</li>
        </ul>
      </div>
    </div>
  );
};

export default ParentDashboard;
