import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageNewborns = () => {
  const [babies, setBabies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/newborns/all')
      .then(res => setBabies(res.data))
      .catch(err => console.error('Error fetching newborns:', err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">Newborns Registered</h2>
      <table className="w-full bg-white border rounded shadow">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Date of Birth</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Weight</th>
            <th className="p-3">Height</th>
            <th className="p-3">Blood Type</th>
            <th className="p-3">Delivery method</th>
            <th className="p-3">Parent(s)</th>
          </tr>
        </thead>
        <tbody>
          {babies.map((baby, i) => (
            <tr key={i} className="text-center border-t hover:bg-gray-100">
              <td className="p-3">{baby.childName}</td>
              <td className="p-3">{new Date(baby.dob).toLocaleDateString()}</td>
              <td className="p-3">{baby.gender}</td>
              <td className="p-3">{baby.weight}</td>
              <td className="p-3">{baby.height}</td>
              <td className="p-3">{baby.bloodType}</td>
              <td className="p-3">{baby.deliveryMethod}</td>
              <td className="p-3">{baby.motherName} & {baby.fatherName}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {babies.length === 0 && (
        <p className="text-gray-500 mt-6 text-center">No newborns registered yet.</p>
      )}
    </div>
  );
};

export default ManageNewborns;
