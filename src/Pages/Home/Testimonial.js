import React from 'react';

const Testimonial = ({testimonial}) => {
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
          <p>{testimonial.description}</p>
        </div>
        <div class="flex space-x-3">
          <div class="avatar items-center">
            <div class="mask mask-squircle w-12 h-12">
              <img src={testimonial.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold text-primary ">{testimonial.name}</div>
            <div class="text-sm opacity-50">{testimonial.city}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;