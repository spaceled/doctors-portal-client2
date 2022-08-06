import React from 'react';

const Testimonial = ({ testimonial }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{testimonial.description}</p>
        <div class="flex items-center">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={testimonial.img} alt="" />
            </div>
          </div>
          <div>
            <h4 class="text-xl">{testimonial.name}</h4>
            <p>{testimonial.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;