import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, setDeleteDoctor }) => {
  const { name, speciality, img, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <label onClick={() => setDeleteDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
      </td>
    </tr>
  );
};

export default DoctorRow;