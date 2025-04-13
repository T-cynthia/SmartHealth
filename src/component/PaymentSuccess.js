import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-700">
          Your consultation has been successfully booked. We look forward to your appointment with the doctor.
        </p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
