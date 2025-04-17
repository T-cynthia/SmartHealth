import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageNurse = () => {
  const [nurses, setNurses] = useState([]);
  const [form, setForm] = useState({ nurseName: '', phone: '', password: '', address: '' });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch all nurses from backend
  const fetchNurses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/nurse/all');
      setNurses(res.data);
    } catch (err) {
      console.error('Failed to fetch nurses', err);
    }
  };

  useEffect(() => {
    fetchNurses();
  }, []);

  // Handle input change in form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission for adding a nurse
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        // Edit existing nurse
        await axios.put(`http://localhost:5000/api/nurse/${editId}/edit`, form);
        setEditMode(false);
        setEditId(null);
      } else {
        // Register new nurse
        await axios.post('http://localhost:5000/api/nurse/register', form);
      }
      setForm({ nurseName: '', phone: '', password: '', address: '' });
      fetchNurses(); // Refresh nurse list
    } catch (err) {
      alert('Failed to save nurse ❌');
    }
  };

  // Handle nurse edit click
  const handleEdit = (nurse) => {
    setForm({
      nurseName: nurse.nurseName,
      phone: nurse.phone,
      password: '', // Leave password empty for edit
      address: nurse.address,
    });
    setEditMode(true);
    setEditId(nurse._id);
  };

  // Handle nurse delete click
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/nurse/${id}`);
      fetchNurses(); // Refresh nurse list after deletion
    } catch (err) {
      alert('Failed to delete nurse ❌');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Nurses</h2>

      {/* Nurse Registration / Edit Form */}
      <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          name="nurseName"
          placeholder="Name"
          value={form.nurseName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="col-span-1 md:col-span-3 bg-blue-700 text-white py-2 rounded"
        >
          {editMode ? 'Update Nurse' : 'Add Nurse'}
        </button>
      </form>

      {/* Nurses Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Password</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Registered At</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
  {nurses.map((nurse) => (
    <tr key={nurse._id}>
      <td className="p-2 border">{nurse.nurseName}</td>
      <td className="p-2 border">{nurse.phone}</td>
      <td className="p-2 border">••••••••</td>
      <td className="p-2 border">{nurse.address}</td>
      <td className="p-2 border">
        {new Date(nurse.createdAt).toLocaleDateString()}
      </td>
      <td className="p-2 border">
        <button
          onClick={() => handleEdit(nurse)}
          className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(nurse._id)}
          className="bg-red-600 text-white py-1 px-2 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

                      </table> 
                      </div> 
                      );
                     };

export default ManageNurse;