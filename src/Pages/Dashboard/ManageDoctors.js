import React, { useState } from 'react';
import { useEffect } from 'react';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [deleteDoctor, setDeleteDoctor] = useState(null);

  useEffect(() => {
    fetch('https://warm-atoll-27481.herokuapp.com/doctor', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [doctors])

  return (
    <div>
      <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Doctors Name</th>
              <th>Specialization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              doctors.map((doctor, index) => <DoctorRow
                key={doctor._key}
                doctor={doctor}
                index={index}
                setDeleteDoctor={setDeleteDoctor}
              ></DoctorRow>)
            }
          </tbody>
        </table>
      </div>
      {deleteDoctor && <DeleteConfirmModal
        deleteDoctor={deleteDoctor}
        setDeleteDoctor={setDeleteDoctor}
      ></DeleteConfirmModal>}
    </div>
  );
};

export default ManageDoctors;