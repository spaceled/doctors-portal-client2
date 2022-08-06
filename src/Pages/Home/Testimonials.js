import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      name: 'Winson Herry',
      city: 'San Francisco',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit, optio quis vero sunt eius explicabo unde nesciunt! Fugiat itaque voluptate enim alias, maiores quae magni nemo atque veritatis molestiae harum dolorum aut mollitia possimus! Voluptatem non saepe eos recusandae?',
      img: people1
    },

    {
      _id: 1,
      name: 'Robert Hetsler',
      city: 'Florida',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit, optio quis vero sunt eius explicabo unde nesciunt! Fugiat itaque voluptate enim alias, maiores quae magni nemo atque veritatis molestiae harum dolorum aut mollitia possimus! Voluptatem non saepe eos recusandae?',
      img: people2
    },

    {
      _id: 1,
      name: 'Dan Mack',
      city: 'California',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia velit, optio quis vero sunt eius explicabo unde nesciunt! Fugiat itaque voluptate enim alias, maiores quae magni nemo atque veritatis molestiae harum dolorum aut mollitia possimus! Voluptatem non saepe eos recusandae?',
      img: people3
    }
  ]
  return (
    <div>
      <div>
        <h5 className="text-primary uppercase">testimonial</h5>
        <h2 className="text-black text-4xl">What's are our Patients Says</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        { 
          testimonials.map(testimonial => <Testimonial 
            key={testimonial._id}
            testimonial={testimonial}
            >
            </Testimonial>)
        }
      </div>
    </div>
  );
};

export default Testimonials;