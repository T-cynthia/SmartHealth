import React from 'react';

const PaymentFailure = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h2>
        <p className="text-gray-700">
          Something went wrong during the payment process. Please try again.
        </p>
      </div>
    </div>
  );
};

export default PaymentFailure;
