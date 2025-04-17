import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageNewborns = () => {
  const [babies, setBabies] = useState([]);

  useEffect(() => {
    axios.get('/api/newborns')
      .then(res => setBabies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Newborns Registered</h2>
      <table className="w-full bg-white border rounded shadow">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">DOB</th>
            <th className="p-3">Registered By</th>
          </tr>
        </thead>
        <tbody>
          {babies.map((baby, i) => (
            <tr key={i} className="text-center border-t">
              <td className="p-3">{baby.fullName}</td>
              <td className="p-3">{baby.dateOfBirth}</td>
              <td className="p-3">{baby.registeredBy?.name || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageNewborns;
