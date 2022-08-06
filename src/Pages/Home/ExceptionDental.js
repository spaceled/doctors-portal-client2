import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ExceptionDental = () => {
  return (
    <div className="hero min-h-screen flex">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1">
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Exceptional Dental care, on your Terms</h1>
          <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi perferendis, laborum reprehenderit porro corrupti consequatur modi! Labore dolore dignissimos corrupti alias. A enim repellat, sequi est veniam magni, eius voluptatem placeat sint recusandae, possimus necessitatibus natus nulla vero culpa explicabo.</p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ExceptionDental;