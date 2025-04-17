import React, { useState } from 'react';
import axios from 'axios';

const ManageNotifications = () => {
  const [form, setForm] = useState({ message: '', nurseEmail: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/notifications', form);
      alert('Notification sent!');
    } catch (err) {
      console.error(err);
      alert('Error sending notification.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Send Notification to Nurse</h2>
      <form onSubmit={handleSend} className="bg-white p-6 rounded shadow w-full max-w-md">
        <input name="nurseEmail" placeholder="Nurse Email" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
        <textarea name="message" placeholder="Your message" onChange={handleChange} className="w-full mb-3 p-2 border rounded" />
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default ManageNotifications;
