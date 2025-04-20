import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users') // update this URL if using a different backend
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Parents List</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border rounded shadow">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Full Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Registered At</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((u, i) => (
                <tr key={i} className="text-center border-t hover:bg-gray-100">
                  <td className="p-3">{u.fullName}</td>
                  <td className="p-3">{u.phone || 'N/A'}</td>
                  <td className="p-3">
                    {u.createdAt
                      ? new Date(u.createdAt).toLocaleDateString()
                      : 'N/A'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-4 text-gray-500">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
