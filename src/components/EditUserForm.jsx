// src/components/EditUserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const EditUserForm = ({ user, setUsers, closeModal }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [company, setCompany] = useState(user.company);
  const [website, setWebsite] = useState(user.website);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email, phone, address, company, website };

    axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, updatedUser)
      .then(response => {
        setUsers(prev => prev.map(u => u.id === user.id ? response.data : u));
        closeModal();
      })
      .catch(error => console.error('Error updating user'));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Similar form inputs as UserForm but pre-filled */}
    </form>
  );
};

export default EditUserForm;
