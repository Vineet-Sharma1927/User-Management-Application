// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = ({ setEditUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching users');
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(() => setError('Error deleting user'));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="table-container">
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => setEditUser(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <Link to={`/user/${user.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
