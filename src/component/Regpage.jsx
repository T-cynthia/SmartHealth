import React, { useState } from 'react';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    // Mother Info
    motherName: '',
    motherEmail:'',
    motherPhone: '',

    // Father Info
    fatherName: '',
    fatherEmail:'',
    fatherPhone: '',

    // Newborn Info
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage(`🎉 Newborn ${formData.childName} has been registered successfully by ${formData.motherName || 'Parent'}!`);
    
    // Clear form
    setFormData({
      motherName: '',
      motherEmail:'',
      motherPhone: '',
      fatherName: '',
      fatherEmail:'',
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
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="max-w-2xl w-full bg-gray-100 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Register Newborn</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Mother's Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Mother's Information</h3>
            <input name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Full Name" className="w-full p-3 mb-2 border rounded" required />
            <input name="fatherName" value={formData.motherEmail} onChange={handleChange} placeholder=" Email" className="w-full p-3 mb-2 border rounded" />
            <input name="motherPhone" value={formData.motherPhone} onChange={handleChange} placeholder="Phone Number" type="tel" className="w-full p-3 mb-2 border rounded" />
          </div>

          {/* Father's Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Father's Information</h3>
            <input name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Full Name" className="w-full p-3 mb-2 border rounded" />
            <input name="fatherName" value={formData.fatherEmail} onChange={handleChange} placeholder=" Email" className="w-full p-3 mb-2 border rounded" />
            <input name="fatherPhone" value={formData.fatherPhone} onChange={handleChange} placeholder="Phone Number" type="tel" className="w-full p-3 mb-2 border rounded" />
          </div>

          {/* Newborn Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Newborn Information</h3>
            <input name="childName" value={formData.childName} onChange={handleChange} placeholder="Child's Full Name" className="w-full p-3 mb-2 border rounded" required />
            <input name="dob" value={formData.dob} onChange={handleChange} type="date" className="w-full p-3 mb-2 border rounded" required />

            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 mb-2 border rounded" required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>

            <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Birth Weight (kg)" type="number" step="0.1" className="w-full p-3 mb-2 border rounded" required />
            <input name="height" value={formData.height} onChange={handleChange} placeholder="Birth Height (cm)" type="number" step="0.1" className="w-full p-3 mb-2 border rounded" required />
            <input name="bloodType" value={formData.bloodType} onChange={handleChange} placeholder="Blood Type (e.g., A+)" className="w-full p-3 mb-2 border rounded" />

            <select name="deliveryMethod" value={formData.deliveryMethod} onChange={handleChange} className="w-full p-3 mb-2 border rounded">
              <option value="">Delivery Method</option>
              <option value="Normal">Normal</option>
              <option value="C-Section">C-Section</option>
              <option value="Other">Other</option>
            </select>

            <select name="doctor" value={formData.doctor} onChange={handleChange} className="w-full p-3 mb-2 border rounded">
              <option value="">Doctor</option>
              <option value="Rosine">Dr. Rosine</option>
              <option value="Williams">Dr. Williams</option>
              <option value="Smith">Dr. Smith</option>
            </select>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
            Register Now
          </button>
        </form>

        {successMessage && (
          <p className="text-green-700 text-center mt-6 font-medium">{successMessage}</p>
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;
