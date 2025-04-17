import React from 'react';

const ManageUsers = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Manage Users</h1>
      <table className="w-full table-auto border border-gray-300 bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td className="border px-4 py-2">Jane Doe</td>
            <td className="border px-4 py-2">jane@example.com</td>
            <td className="border px-4 py-2">Parent</td>
            <td className="border px-4 py-2">
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
