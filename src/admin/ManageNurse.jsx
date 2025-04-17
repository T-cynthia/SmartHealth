import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageNurses = () => {
  const [nurses, setNurses] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const fetchNurses = async () => {
    try {
      const res = await axios.get('/api/nurses');
      setNurses(res.data);
    } catch (err) {
      console.error('Failed to fetch nurses');
    }
  };

  useEffect(() => {
    fetchNurses();
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/nurses', form);
      setForm({ name: '', email: '', phone: '' });
      fetchNurses(); // Refresh list
    } catch (err) {
      alert('Failed to add nurse ❌');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Nurses</h2>

      <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border p-2 rounded" />
        <input name="phone" placeholder="phone" value={form.phone} onChange={handleChange} className="border p-2 rounded" />
        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} className="border p-2 rounded" />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="col-span-1 md:col-span-3 bg-blue-700 text-white py-2 rounded">
          Add Nurse
        </button>
      </form>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Password</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Registered At</th>
          </tr>
        </thead>
        <tbody>
          {nurses.map(nurse => (
            <tr key={nurse._id}>
              <td className="p-2 border">{nurse.name}</td>
              <td className="p-2 border">{nurse.password}</td>
              <td className="p-2 border">{nurse.phone}</td>
              <td className="p-2 border">{nurse.address}</td>
              <td className="p-2 border">{new Date(nurse.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageNurses;
