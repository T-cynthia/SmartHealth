import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';

const Certificate = () => {
  const [baby, setBaby] = useState("");
  const certificateRef = useRef(null);

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

  const downloadCertificate = () => {
    if (certificateRef.current) {
      html2canvas(certificateRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'birth_certificate.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  if (!baby) {
    return <div className="text-center mt-10 text-gray-500">Loading certificate...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-2xl w-full border border-gray-300 relative" ref={certificateRef}>
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pt-6">
          <div className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/200px-Coat_of_arms_of_Rwanda.svg.png"
              alt="Rwanda Coat of Arms"
              className="w-16 h-16 mr-4"
            />
            <div>
              <h2 className="text-xl font-bold text-blue-700">Republic of Rwanda</h2>
              <p className="text-sm text-gray-600">Civil Registration Office</p>
            </div>
          </div>
        </div>

        {/* Rwandan Flag as three horizontal stripes */}
        <div className="mb-6">
          <div className="h-2 bg-blue-700"></div>
          <div className="h-2 bg-yellow-500"></div>
          <div className="h-2 bg-green-700"></div>
        </div>

        {/* Shadow of Coat of Arms in Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/200px-Coat_of_arms_of_Rwanda.svg.png"
            alt="Rwanda Coat of Arms Shadow"
            className="w-64 h-64"
          />
        </div>

        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Birth Certificate</h1>

        <div className="space-y-4 text-lg text-gray-800 relative z-10">
          <p><strong>Certificate Number:</strong> KD-{baby._id.slice(-6).toUpperCase()}</p>
          <p><strong>Full Name of Child:</strong> {baby.childName}</p>
          <p><strong>Date of Birth:</strong> {new Date(baby.dob).toLocaleDateString()}</p>
          <p><strong>Gender:</strong> {baby.gender}</p>
          <p><strong>Place of Birth:</strong> {baby.placeOfBirth ? `${baby.placeOfBirth.cell}, ${baby.placeOfBirth.sector}, ${baby.placeOfBirth.district}, Rwanda` : 'Not specified'}</p>
          <p><strong>Mother’s Name:</strong> {baby.motherName}</p>
          <p><strong>Father’s Name:</strong> {baby.fatherName}</p>
          <hr className="border-gray-300 my-2" />
          <p><strong>Issued in:</strong> {baby.placeOfBirth ? `${baby.placeOfBirth.sector}, ${baby.placeOfBirth.district}` : 'Kigali'}</p>
          <hr className="border-gray-300 my-2" />
          <p><strong>Executive Secretary of the Sector:</strong> Jean Baptiste</p>
          <p><strong>Issued on:</strong> {new Date().toLocaleDateString()}</p>
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="mt-10 flex justify-between items-center text-sm text-gray-500">
          <div className="flex flex-col items-center">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com/certificate/{baby._id}"
              alt="QR Code"
              className="w-16 h-16"
            />
            <p className="text-xs mt-1">Scan to verify</p>
          </div>
          <div className="text-center">
            Issued by <span className="font-medium">KiddoCare Smart Health System</span>
          </div>
        </div>
      </div>

      <button
        onClick={downloadCertificate}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
