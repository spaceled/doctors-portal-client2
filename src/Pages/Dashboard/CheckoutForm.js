import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { success } from 'daisyui/src/colors';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const CheckoutForm = ({payment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const {_id, price, patient, patientName} = payment;

  useEffect( () => {
    fetch(`https://warm-atoll-27481.herokuapp.com/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({price})
    })
    .then(res => res.json())
    .then(data => {
      if (data?.clientSecret) {
        setClientSecret(data.clientSecret)
      }
    })
  },[price])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });

    setCardError(error?.message || '');
    success('');
    setProcessing(true);

    const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient
          },
        },
      },
    );
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    }
    else {
      setCardError('');
      setTransactionId(paymentIntent.id);
      setSuccess('Congrats! Your Payment is completed successfully.');

      const paymentConfirm = {
        payment: _id,
        transactionId: paymentIntent.id
      }
      fetch(`https://warm-atoll-27481.herokuapp.com/create-payment-intent/booking/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(paymentConfirm)
      })
      .then(res => res.json())
      .then(data => {
        setProcessing(false);
      })

    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret||!elements}>
          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
      {
        success && <div className="text-green-500">
          <p>{success}</p>
          <p>Your Transaction Id: <span class="text-orange-500 font-bold">{transactionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;