import React, { useState } from 'react';
import axios from 'axios';

function RegisterNewborn() {
  const [formData, setFormData] = useState({
    childName: '',
    dob: '',
    gender: '',
    weight: '',
    height: '',
    bloodType: '',
    deliveryMethod: '',
    doctor: '',
    placeOfBirth: {
      district: '',
      sector: '',
      cell: ''
    },
    motherName: '',
    motherPhone: '',
    fatherName: '',
    fatherPhone: ''
  });
  const [message, setMessage] = useState('');

  const districts = [
    'Gasabo', 'Kicukiro', 'Nyarugenge', 'Bugesera', 'Gatsibo', 'Kayonza', 'Kirehe', 'Ngoma', 'Nyagatare', 'Rwamagana',
    'Burera', 'Gakenke', 'Gicumbi', 'Musanze', 'Rulindo', 'Gisagara', 'Huye', 'Kamonyi', 'Muhanga', 'Nyamagabe',
    'Nyanza', 'Nyaruguru', 'Ruhango', 'Karongi', 'Ngororero', 'Nyabihu', 'Rubavu', 'Rusizi', 'Rutsiro'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('placeOfBirth.')) {
      const field = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        placeOfBirth: {
          ...prev.placeOfBirth,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/newborns', formData);
      setMessage("🎉 Your newborn has been registered successfully!");
      setFormData({
        childName: '',
        dob: '',
        gender: '',
        weight: '',
        height: '',
        bloodType: '',
        deliveryMethod: '',
        doctor: '',
        placeOfBirth: {
          district: '',
          sector: '',
          cell: ''
        },
        motherName: '',
        motherPhone: '',
        fatherName: '',
        fatherPhone: ''
      });
    } catch (error) {
      setMessage("❌ Error registering newborn. Please try again.");
      console.error('Error registering newborn:', error);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Register Newborn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="childName"
          placeholder="Child Name"
          value={formData.childName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="weight"
          placeholder="Weight (kg)"
          value={formData.weight}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="height"
          placeholder="Height (cm)"
          value={formData.height}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="bloodType"
          placeholder="Blood Type"
          value={formData.bloodType}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="deliveryMethod"
          placeholder="Delivery Method"
          value={formData.deliveryMethod}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="doctor"
          placeholder="Doctor"
          value={formData.doctor}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <select
          name="placeOfBirth.district"
          value={formData.placeOfBirth.district}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select District</option>
          {districts.map(district => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
        <input
          type="text"
          name="placeOfBirth.sector"
          placeholder="Sector"
          value={formData.placeOfBirth.sector}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="placeOfBirth.cell"
          placeholder="Cell"
          value={formData.placeOfBirth.cell}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="motherName"
          placeholder="Mother Name"
          value={formData.motherName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="motherPhone"
          placeholder="Mother Phone"
          value={formData.motherPhone}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father Name"
          value={formData.fatherName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="fatherPhone"
          placeholder="Father Phone"
          value={formData.fatherPhone}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Register
      </button>

      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
}

export default RegisterNewborn;
