import React, { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const { doctor, time, amount } = location.state || {}; // Get data from the consultation page
  const [paymentStatus, setPaymentStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleToken = async (token) => {
    try {
      setLoading(true);
      // Sending payment data to the backend (same as before)
      const response = await axios.post('/api/payment/create-checkout-session', {
        token,
        amount,
        doctor,
        appointmentDate: time,
      });
      setPaymentStatus('✅ Payment Successful!');
    } catch (error) {
      setPaymentStatus('❌ Payment Failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Payment for Consultation
        </h2>
        <p className="text-gray-700 mb-6">
          You're paying <span className="font-semibold">${amount}</span> for your appointment with{" "}
          <span className="font-semibold">{doctor}</span> on{" "}
          <span className="font-semibold">{time}</span>.
        </p>

        <StripeCheckout
          stripeKey="your_publishable_key" // ⚠️ Replace this with your real Stripe public key
          token={handleToken}
          amount={amount * 100} // Convert dollars to cents
          name="Healthcare Consultation"
          description="Pay for your doctor consultation"
          panelLabel="Pay Now"
          billingAddress
        >
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </button>
        </StripeCheckout>

        {paymentStatus && (
          <p className="mt-4 text-lg font-medium text-blue-600">{paymentStatus}</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
