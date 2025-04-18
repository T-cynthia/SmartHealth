import React from 'react';

const tips = [
  {
    title: 'Keep Your Baby Warm',
    description: 'Newborns can’t regulate temperature well. Dress them in layers and use a soft blanket.',
  },
  {
    title: 'Stick to Vaccination Schedules',
    description: 'Timely vaccinations help protect your child from serious illnesses.',
  },
  {
    title: 'Prioritize Nutrition',
    description: 'Breastfeed when possible, and introduce healthy foods as your child grows.',
  },
  {
    title: 'Monitor for Unusual Symptoms',
    description: 'Fever, rash, difficulty breathing, or constant crying should be reported to a doctor.',
  },
  {
    title: 'Bond Through Touch & Voice',
    description: 'Talk, sing, and cuddle often — it strengthens emotional and cognitive development.',
  },
];

const HealthyTips = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Healthy Tips for Parents</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {tips.map((tip, index) => (
          <div key={index} className="bg-blue-50 p-5 rounded-lg shadow-sm hover:shadow-md transition duration-200">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-blue-900">{tip.title}</h3>
            </div>
            <p className="text-gray-700">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthyTips;
