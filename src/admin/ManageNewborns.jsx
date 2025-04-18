import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageNewborns = () => {
  const [babies, setBabies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/newborns')
      .then(res => setBabies(res.data))
      .catch(err => console.error('Error fetching newborns:', err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Newborns Registered</h2>
      <table className="w-full bg-white border rounded shadow">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Date of Birth</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Parent</th>
          </tr>
        </thead>
        <tbody>
          {babies.map((baby, i) => (
            <tr key={i} className="text-center border-t">
              <td className="p-3">{baby.name}</td>
              <td className="p-3">{new Date(baby.dob).toLocaleDateString()}</td>
              <td className="p-3">{baby.gender}</td>
              <td className="p-3">{baby.parent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageNewborns;
