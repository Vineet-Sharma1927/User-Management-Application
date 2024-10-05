// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ setUsers, closeModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState({ street: '', city: '' });
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, phone, address, company, website };
    
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        setUsers(prev => [...prev, response.data]);
        closeModal();
      })
      .catch(error => console.error('Error creating user'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} required minLength={3} />
      
      <label>Email</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      
      <label>Phone</label>
      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
      
      <label>Street</label>
      <input type="text" value={address.street} onChange={e => setAddress({ ...address, street: e.target.value })} required />
      
      <label>City</label>
      <input type="text" value={address.city} onChange={e => setAddress({ ...address, city: e.target.value })} required />
      
      <label>Company (optional)</label>
      <input type="text" value={company} onChange={e => setCompany(e.target.value)} />
      
      <label>Website (optional)</label>
      <input type="url" value={website} onChange={e => setWebsite(e.target.value)} />
      
      <button type="submit">Create User</button>
    </form>
  );
};

export default UserForm;
