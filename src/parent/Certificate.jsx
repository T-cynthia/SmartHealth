import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Certificate = () => {
  const [baby, setBaby] = useState("");

  useEffect(() => {
    const storedParent = JSON.parse(localStorage.getItem('parent'));
    console.log('Stored parent:', storedParent);
  
    if (storedParent) {
      axios.post('http://localhost:5000/api/newborns/parent', storedParent)
        .then(res => {
          console.log('Received baby:', res.data);
          if (res.data.length > 0) {
            setBaby(res.data[0]);
          }
        })
        .catch(err => console.error('Error fetching baby data:', err));
    }
  }, []);
  

  if (!baby) {
    return <div className="text-center mt-10 text-gray-500">Loading certificate...</div>;
  }

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Birth Certificate</h1>

        <div className="space-y-4 text-lg text-gray-800">
          <p><strong>Certificate Number:</strong> KD-{baby._id.slice(-6).toUpperCase()}</p>
          <p><strong>Full Name of Child:</strong> {baby.childName}</p>
          <p><strong>Date of Birth:</strong> {new Date(baby.dob).toLocaleDateString()}</p>
          <p><strong>Gender:</strong> {baby.gender}</p>
          <p><strong>Place of Birth:</strong> Kigali, Rwanda</p>
          <p><strong>Mother’s Name:</strong> {baby.motherName}</p>
          <p><strong>Father’s Name:</strong> {baby.fatherName}</p>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          Issued by <span className="font-medium">KiddoCare Smart Health System</span>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
