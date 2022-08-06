import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';


const Banner = () => {
  // const backgroundImage = {
  //   backgroundImage: "url('../../assets/images/bg.png')"
  // }
  return (
    <div>
      {/* <div class={`hero min-h-screen px-12 w-full h-full bg-${[('../../assets/images/bg.png')]}`}> */}
      <div class="hero min-h-screen w-full h-full" style={{background: `url(${bg})`}}>
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="chair"/>
          <div>
            <h1 class="text-5xl font-bold">Your new smile starts here</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;