import express from 'express';
import Stripe from 'stripe';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  // @ts-ignore
  apiVersion: '2023-10-16',
});

const resend = new Resend(process.env.RESEND_API_KEY || 're_test_placeholder');

app.use(express.json());

// Endpoint to create a Stripe PaymentIntent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount = 5000 } = req.body; // Default $50.00

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to send booking email via Resend
app.post('/api/send-booking-email', async (req, res) => {
  const { name, petType, checkIn, checkOut } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Amanda\'s Critter Care <onboarding@resend.dev>',
      to: ['hello@amandascrittercare.com'],
      subject: `New Booking Request from ${name}`,
      html: `
        <h1>New Booking Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Pet Type:</strong> ${petType}</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
      `,
    });

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
