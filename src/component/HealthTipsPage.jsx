import React from 'react';

const HealthTipsPage = () => {
  const tips = [
    {
      title: "Track Baby's Growth",
      description: "Keep regular records of your baby’s weight, height, and development milestones. Use a baby health record book or a tracking app.",
    },
    {
      title: "Monitor Temperature",
      description: "Use a thermometer to check your baby's temperature if they feel warm. A fever in babies should be checked by a doctor.",
    },
    {
      title: "Hydration is Key",
      description: "Make sure your baby is drinking enough breast milk or formula. Dehydration can be serious in infants.",
    },
    {
      title: "When Baby is Sick",
      description: "If your baby has a fever, cough, vomiting, or diarrhea — keep them hydrated and visit a doctor if symptoms last more than a day or worsen.",
    },
    {
      title: "Vaccination Reminders",
      description: "Follow the national immunization schedule. Set reminders for your baby’s vaccination appointments.",
    },
    {
      title: "Healthy Sleep Routine",
      description: "Newborns need 14–17 hours of sleep per day. Create a calm sleeping environment and follow a consistent routine.",
    },
    {
      title: "Hygiene Matters",
      description: "Wash hands before handling the baby. Clean bottles and pacifiers properly. Keep baby’s nails trimmed to avoid scratches.",
    },
    {
      title: "Seek Help When Unsure",
      description: "If you’re ever unsure about a symptom or behavior, contact a nurse through the app chat or visit the nearest health center.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Mother & Baby Health Tips</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{tip.title}</h2>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTipsPage;
