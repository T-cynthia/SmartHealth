import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageNewborns = () => {
  const [newborns, setNewborns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/newborns')
      .then(res => setNewborns(res.data))
      .catch(err => console.error('Error fetching newborns:', err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Manage Newborns</h1>
      <table className="w-full table-auto border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">DOB</th>
            <th className="px-4 py-2">Parent</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {newborns.map((baby) => (
            <tr key={baby._id}>
              <td className="border px-4 py-2">{baby.name}</td>
              <td className="border px-4 py-2">{baby.dob}</td>
              <td className="border px-4 py-2">{baby.parent}</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageNewborns;
