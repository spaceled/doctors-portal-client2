import React, { useState } from 'react';
import { useEffect } from 'react';

const useToken = user => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, { 
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Token', data);
      })
    }
  }, [user]);
  return token;
}

export default useToken;