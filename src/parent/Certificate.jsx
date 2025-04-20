import React from 'react';

const Certificate = () => {
  const baby = {
    fullName: 'Baby IGABE Junior',
    dateOfBirth: '2024-03-15',
    gender: 'Female',
    placeOfBirth: 'Kigali, Rwanda',
    motherName: 'IGABE Lydivine',
    fatherName: 'John Doe',
    certificateNumber: 'KD-2024-00123'
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Birth Certificate</h1>

        <div className="space-y-4 text-lg text-gray-800">
          <p><strong>Certificate Number:</strong> {baby.certificateNumber}</p>
          <p><strong>Full Name of Child:</strong> {baby.fullName}</p>
          <p><strong>Date of Birth:</strong> {baby.dateOfBirth}</p>
          <p><strong>Gender:</strong> {baby.gender}</p>
          <p><strong>Place of Birth:</strong> {baby.placeOfBirth}</p>
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
