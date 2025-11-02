import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';

const VaccinationCertificate = () => {
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
        link.download = 'vaccination_certificate.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  if (!baby) {
    return <div className="text-center mt-10 text-gray-500">Loading certificate...</div>;
  }

  const completedVaccines = baby.vaccines ? baby.vaccines.filter(v => v.status === 'Completed') : [];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-yellow-200 p-6 border-4 border-blue-300 max-w-4xl w-full" ref={certificateRef}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-blue-700">REPUBULIKA Y'URWANDA</h2>
          <p className="text-sm text-blue-700">MINISTERI Y'UBUZIMA</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Coat_of_arms_of_Rwanda.svg/200px-Coat_of_arms_of_Rwanda.svg.png"
            alt="Rwanda Coat of Arms"
            className="w-16 h-16 mx-auto mt-2"
          />
        </div>

        <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">IFISHI Y'UBUZIMA BW'UMWANA</h1>

        {/* Child Info Table */}
        <table className="w-full border-collapse border border-blue-300 mb-4">
          <tbody>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">IKIGO N'IBITARO</td>
              <td className="border border-blue-300 p-2">{baby.placeOfBirth ? baby.placeOfBirth.hospital || 'N/A' : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">1. IZINA RY'UMWANA</td>
              <td className="border border-blue-300 p-2">{baby.childName}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">2. ITARIKI YAVUTSEHO</td>
              <td className="border border-blue-300 p-2">{new Date(baby.dob).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">3. IZINA RYA SE</td>
              <td className="border border-blue-300 p-2">{baby.fatherName}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">4. IZINA RYA NYINA</td>
              <td className="border border-blue-300 p-2">{baby.motherName}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">5. UMUDUGUDU</td>
              <td className="border border-blue-300 p-2">{baby.placeOfBirth ? baby.placeOfBirth.village || 'N/A' : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">6. AKAGARI KA</td>
              <td className="border border-blue-300 p-2">{baby.placeOfBirth ? baby.placeOfBirth.cell : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">7. UMURENGE WA</td>
              <td className="border border-blue-300 p-2">{baby.placeOfBirth ? baby.placeOfBirth.sector : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">8. AKARERE KA</td>
              <td className="border border-blue-300 p-2">{baby.placeOfBirth ? baby.placeOfBirth.district : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2 font-bold">9. INTARA YA</td>
              <td className="border border-blue-300 p-2">{baby.placeOfBirth ? baby.placeOfBirth.province || 'N/A' : 'N/A'}</td>
            </tr>
          </tbody>
        </table>

        <p className="text-center font-bold mb-4">A. GUKINGIZA INKINGO UMWANA AHABWA</p>

        {/* Vaccination Schedule Table */}
        <table className="w-full border-collapse border border-blue-300 mb-4">
          <thead>
            <tr>
              <th className="border border-blue-300 p-2 font-bold">AMAZINA Y'INKINGO</th>
              <th className="border border-blue-300 p-2 font-bold">AMATARIKI N'INSHURO AZAKINGIRWA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-blue-300 p-2">1. Urw'IGITUNTU</td>
              <td className="border border-blue-300 p-2">{baby.vaccines ? baby.vaccines.find(v => v.name.toLowerCase().includes('bcg'))?.dueDate ? new Date(baby.vaccines.find(v => v.name.toLowerCase().includes('bcg')).dueDate).toLocaleDateString() : 'N/A' : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2">2. Urw'IMBASA</td>
              <td className="border border-blue-300 p-2">{baby.vaccines ? baby.vaccines.find(v => v.name.toLowerCase().includes('dpt'))?.dueDate ? new Date(baby.vaccines.find(v => v.name.toLowerCase().includes('dpt')).dueDate).toLocaleDateString() : 'N/A' : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2">3. Urwa KOKORISHI, AGAKWEGA (Tetanosi), AKANIGA, HEPATITE B</td>
              <td className="border border-blue-300 p-2">{baby.vaccines ? baby.vaccines.find(v => v.name.toLowerCase().includes('polio') || v.name.toLowerCase().includes('tetanus') || v.name.toLowerCase().includes('measles') || v.name.toLowerCase().includes('hepatitis'))?.dueDate ? new Date(baby.vaccines.find(v => v.name.toLowerCase().includes('polio') || v.name.toLowerCase().includes('tetanus') || v.name.toLowerCase().includes('measles') || v.name.toLowerCase().includes('hepatitis')).dueDate).toLocaleDateString() : 'N/A' : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2">4. PINEMOKOKE</td>
              <td className="border border-blue-300 p-2">{baby.vaccines ? baby.vaccines.find(v => v.name.toLowerCase().includes('pneumococcal'))?.dueDate ? new Date(baby.vaccines.find(v => v.name.toLowerCase().includes('pneumococcal')).dueDate).toLocaleDateString() : 'N/A' : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2">5. Urw'impiswi (Rotavirus)</td>
              <td className="border border-blue-300 p-2">{baby.vaccines ? baby.vaccines.find(v => v.name.toLowerCase().includes('rotavirus'))?.dueDate ? new Date(baby.vaccines.find(v => v.name.toLowerCase().includes('rotavirus')).dueDate).toLocaleDateString() : 'N/A' : 'N/A'}</td>
            </tr>
            <tr>
              <td className="border border-blue-300 p-2">6. Urw'ISERU</td>
              <td className="border border-blue-300 p-2">{baby.vaccines ? baby.vaccines.find(v => v.name.toLowerCase().includes('chickenpox') || v.name.toLowerCase().includes('varicella'))?.dueDate ? new Date(baby.vaccines.find(v => v.name.toLowerCase().includes('chickenpox') || v.name.toLowerCase().includes('varicella')).dueDate).toLocaleDateString() : 'N/A' : 'N/A'}</td>
            </tr>
          </tbody>
        </table>

        {/* Follow-up Table */}
        <table className="w-full border-collapse border border-blue-300">
          <thead>
            <tr>
              <th className="border border-blue-300 p-2 font-bold">AMATARIKI</th>
              <th className="border border-blue-300 p-2 font-bold">AZAGARUKIRAHO</th>
            </tr>
          </thead>
          <tbody>
            {completedVaccines.slice(0, 6).map((vaccine, index) => (
              <tr key={index}>
                <td className="border border-blue-300 p-2">{new Date(vaccine.dueDate).toLocaleDateString()}</td>
                <td className="border border-blue-300 p-2">{vaccine.status === 'Completed' ? 'Byarangiye' : 'Ntibyakozwe'}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default VaccinationCertificate;
