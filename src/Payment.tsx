import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { PawPrint, ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Placeholder for Stripe public key
const stripePromise = loadStripe('pk_test_placeholder');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 5000 }),
      });

      const { clientSecret, error: backendError } = await response.json();

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        setProcessing(false);
        return;
      }

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement as any,
        },
      });

      if (stripeError) {
        setError(stripeError.message || 'An unexpected error occurred.');
        setProcessing(false);
      } else if (paymentIntent?.status === 'succeeded') {
        setSucceeded(true);
        setProcessing(false);
        setTimeout(() => navigate('/'), 3000);
      }
    } catch (e: any) {
      setError(e.message || 'An unexpected error occurred.');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-cream/50 p-6 rounded-2xl border border-charcoal/10 shadow-inner">
        <label className="block text-sm font-semibold text-charcoal mb-4">Card Details</label>
        <div className="p-4 bg-white rounded-xl border border-charcoal/5 shadow-sm">
            <CardElement
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#2D3748',
                    '::placeholder': {
                    color: '#A0AEC0',
                    },
                },
                invalid: {
                    color: '#E53E3E',
                },
                },
            }}
            />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm font-medium bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            {error}
        </div>
      )}

      {succeeded ? (
        <div className="text-green-600 text-center font-bold bg-green-50 p-6 rounded-2xl border border-green-100 animate-bounce">
          Payment Successful! Redirecting...
        </div>
      ) : (
        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
      )}

      <div className="flex items-center justify-center gap-2 text-charcoal/40 text-xs">
        <Lock size={12} />
        <span>Secure, encrypted payment powered by Stripe</span>
      </div>
    </form>
  );
};

export default function Payment() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal flex flex-col">
      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-md sticky top-0 z-50 border-b border-charcoal/5">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <div className="bg-primary text-white p-2 rounded-xl">
              <PawPrint size={20} />
            </div>
            <span className="font-serif font-bold text-lg tracking-tight">
              Amanda's Critter Care
            </span>
          </div>
          <button
            onClick={() => navigate('/')}
            className="text-charcoal/60 hover:text-primary transition-colors flex items-center gap-1 font-medium"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 py-12">
        <div className="max-w-xl w-full">
          <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-charcoal/5 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h1 className="text-3xl font-serif font-bold mb-3">Complete Your Booking</h1>
                <p className="text-charcoal/60 leading-relaxed">
                  Enter your payment details below to secure your pet sitting appointment.
                </p>
              </div>

              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>

              <div className="mt-10 pt-8 border-t border-charcoal/5 grid grid-cols-3 gap-4">
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-charcoal/40 mb-1">Service</p>
                    <p className="font-serif font-bold text-sm">Pet Care</p>
                </div>
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-charcoal/40 mb-1">Amount</p>
                    <p className="font-serif font-bold text-sm">$--.--</p>
                </div>
                <div className="text-center">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-charcoal/40 mb-1">Status</p>
                    <p className="font-serif font-bold text-sm text-primary">Pending</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-charcoal/40 text-sm mt-8">
            &copy; {new Date().getFullYear()} Amanda's Critter Care. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}
