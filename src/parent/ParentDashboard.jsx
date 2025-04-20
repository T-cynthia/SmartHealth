import React from 'react';

const ParentDashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Welcome Parent 👨‍👩‍👧</h2>
      <p className="text-gray-600 mb-6">Here’s a quick overview of your child’s health schedule and activity.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="font-semibold text-blue-600 mb-2">Baby Name</h3>
          <p>Jane Doe</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="font-semibold text-blue-600 mb-2">Date of Birth</h3>
          <p>Jan 15, 2024</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="font-semibold text-blue-600 mb-2">Age</h3>
          <p>3 Months</p>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Upcoming Vaccinations</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Polio - April 20, 2025</li>
          <li>DTP - May 5, 2025</li>
        </ul>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Notifications from Nurse</h3>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Your child’s next check-up is due soon.</li>
          <li>New vaccine reminder sent on April 15.</li>
        </ul>
      </div>

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
