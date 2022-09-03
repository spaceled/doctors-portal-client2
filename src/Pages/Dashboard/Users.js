import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://warm-atoll-27481.herokuapp.com/user', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [users])
  // const {data: users, isLoading, refetch} = useQuery('users', () => 
  // fetch('https://warm-atoll-27481.herokuapp.com/user', {
  //   method: 'GET',
  //   headers: { 
  //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //   }
  // })
  //   .then(res => res.json()));
  // if (isLoading) {
  //   return <Loading></Loading>
  // }
  return (
    <div>
      <h2 className="text-2xl">All Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map( user => <UserRow
              key={user._id}
              user={user}
              // refetch={refetch}
              >
              </UserRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;