// src/pages/UserDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const UserDetailPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching user details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-detail-container">
      <h2>{user.name}'s Details</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
      <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
      <Link to="/">Back to Users</Link>
    </div>
  );
};

export default UserDetailPage;
