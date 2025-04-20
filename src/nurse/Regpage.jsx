import React, { useState } from 'react';
import axios from 'axios';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    motherName: '',
    motherEmail: '',
    motherPhone: '',
    fatherName: '',
    fatherEmail: '',
    fatherPhone: '',
    childName: '',
    dob: '',
    gender: '',
    weight: '',
    height: '',
    bloodType: '',
    deliveryMethod: '',
    doctor: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/newborns/register', formData);
      setSuccessMessage(`🎉 Newborn ${res.data.newborn.childName} registered successfully!`);
      setErrorMessage('');
  
      // Alert user immediately
      alert(`✅ Child ${res.data.newborn.childName} has been successfully registered!`);
  
      // Reset form
      setFormData({
        motherName: '',
        motherEmail: '',
        motherPhone: '',
        fatherName: '',
        fatherEmail: '',
        fatherPhone: '',
        childName: '',
        dob: '',
        gender: '',
        weight: '',
        height: '',
        bloodType: '',
        deliveryMethod: '',
        doctor: ''
      });
    } catch (err) {
      setErrorMessage('Something went wrong! Please try again.');
      setSuccessMessage('');
      console.error('Registration error:', err);
    }
  };
  

  return (
    <div className="w-5xl bg-gray-100 p-8 rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Register Newborn</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Parent Info */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Mother's Information</h3>
            <input name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Full Name" className="w-full p-3 border rounded" required />
            <input name="motherPhone" value={formData.motherPhone} onChange={handleChange} placeholder="Phone Number" type="tel" className="w-full p-3 border rounded" />
            <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange} className="w-full p-3 border rounded">
              <option value="">Delivery Method</option>
              <option value="Normal">Normal</option>
              <option value="C-Section">C-Section</option>
              <option value="Other">Other</option>
            </select>
            <select name="doctor" value={formData.doctor} onChange={handleChange} className="w-full p-3 border rounded">
              <option value="">Doctor</option>
              <option value="Rosine">Dr. Rosine</option>
              <option value="Williams">Dr. Williams</option>
              <option value="Smith">Dr. Smith</option>
            </select>

            <h3 className="text-lg font-semibold text-gray-700 pt-4">Father's Information</h3>
            <input name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Full Name" className="w-full p-3 border rounded" />
            <input name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} placeholder="Phone Number" type="tel" className="w-full p-3 border rounded" />
          </div>

          {/* Child Info */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h3 className="text-lg font-semibold text-gray-700">Newborn Information</h3>
            <input name="childName" value={formData.childName} onChange={handleChange} placeholder="Child's Full Name" className="w-full p-3 border rounded" required />
            <input name="dob" value={formData.dob} onChange={handleChange} type="date" className="w-full p-3 border rounded" required />
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 border rounded" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Birth Weight (kg)" type="number" step="0.1" className="w-full p-3 border rounded" required />
            <input name="height" value={formData.height} onChange={handleChange} placeholder="Birth Height (cm)" type="number" step="0.1" className="w-full p-3 border rounded" required />
            <input name="bloodType" value={formData.bloodType} onChange={handleChange} placeholder="Blood Type (e.g., A+)" className="w-full p-3 border rounded" />
          </div>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Register Now
        </button>
      </form>

      {successMessage && (
        <p className="text-green-700 text-center mt-6 font-medium">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-600 text-center mt-6 font-medium">{errorMessage}</p>
      )}
    </div>
  );
}

export default RegistrationPage;
