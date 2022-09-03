import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [services, setServices] = useState([]); 

  // const { data: services, isLoading } = useQuery('services', () => fetch('https://warm-atoll-27481.herokuapp.com/service').then(res => res.json()))
  
  useEffect(() => {
    fetch('https://warm-atoll-27481.herokuapp.com/service')
    .then(res => res.json())
    .then(data => {
      setServices(data)})
  }, []);
  
  const imageStorageKey = 'e3fe5eac8e932d1b516ac86c756143d5';

  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(result => {
      if (result.success) {
        const img = result.data.url;
        const doctorInfo = {
          name: data.name, 
          email: data.email, 
          speciality: data.speciality,
          img: img
        }
        fetch('https://warm-atoll-27481.herokuapp.com/doctor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(doctorInfo)
        })
        .then(res => res.json())
        .then(inserted => {
          if (inserted.insertedId) {
            toast.success('Doctor Added successfully');
            reset();
          }
          else {
            toast.error('Failed to add Doctor')
          }
        })
      }
    })
  };

  // if (isLoading) {
  //   return <Loading></Loading>
  // }
  return (
    <div>
      <h2 className="text-2xl">Add a New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name Field */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required"
              }
            })}
          />
          <label className="label">
            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
        </div>

        {/* Email Field */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required"
              },
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Provide a valid email address'
              }
            })}
          />
          <label className="label">
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

          </label>
        </div>

        {/* Services Field */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialization</span>
          </label>
          <select {...register('speciality')} className="select input-bordered w-full max-w-xs">
            {
              services?.map(service => <option
              key={service._id}
              value={service.name}
              >{service.name}</option>)
            }
          </select>
        </div>

        {/* Image Loading Field */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required"
              }
            })}
          />
          <label className="label">
            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
          </label>
        </div>
        <input className="btn w-full max-w-xs text-white" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddDoctor;