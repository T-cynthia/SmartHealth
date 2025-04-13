const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Use your secret Stripe key here
const router = express.Router();

router.post('/payment/create-checkout-session', async (req, res) => {
  const { amount, doctor, appointmentDate } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Consultation with Dr. ${doctor}`,
              description: `Appointment for ${appointmentDate}`,
            },
            unit_amount: amount * 100, // Convert dollars to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/payment/success`, // Replace with your frontend success URL
      cancel_url: `${process.env.FRONTEND_URL}/payment/cancel`,   // Replace with your frontend cancel URL
      metadata: { doctor, appointmentDate },
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
