import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
  return (
    <section style={{
      background: `url(${appointment})`
    }} 
    className="flex justify-center items-center">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt=""/>
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an Appointment</h2>
        <p className="text-white pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est exercitationem sapiente aperiam. Eveniet repellendus aperiam necessitatibus molestiae. Sunt nostrum corporis quibusdam asperiores eos nemo accusantium alias qui obcaecati tempora laborum sapiente autem distinctio doloribus temporibus, odio delectus. At, aperiam perferendis.</p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;