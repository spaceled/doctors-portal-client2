import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LdqxxDgFNSODvLnhYHoRFNzVNF1U65NL2Z52UxDjebk5qSRxhJBewiUNwJHgC6Xbog9NtfsYZU7FYf7eKugPxEc00CiZJL9Jm');

const Payment = () => {
  const { id } = useParams();
  const url = `https://warm-atoll-27481.herokuapp.com/booking/${id}`;
  const [payment, setPayment] = useState([]);
  const { patientName, treatment, date, slot, price } = payment;

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setPayment(data)
      });
  }, [payment]);

  return (
    <div>
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body my-12">
          <p>Hello, <span className="text-success text-2xl font-bold">{patientName}</span></p>
          <h2 className="card-title">Please, Pay for <span class="text-primary">{treatment}</span></h2>
          <p>Your Appointment: <span className="text-orange-700">{date}</span> at {payment.slot}</p>
          <p>Please, pay: ${price}</p>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm payment={payment}/>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;