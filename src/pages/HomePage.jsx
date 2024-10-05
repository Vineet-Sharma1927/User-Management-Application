// src/pages/HomePage.js
import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import EditUserForm from '../components/EditUserForm';

const HomePage = () => {
  const [editUser, setEditUser] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <div className="homepage-container">
      <button onClick={() => setIsCreateModalOpen(true)}>Add New User</button>

      <UserList setEditUser={setEditUser} />

      {/* User creation modal */}
      {isCreateModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setIsCreateModalOpen(false)}>Close</button>
            <UserForm setUsers={setEditUser} closeModal={() => setIsCreateModalOpen(false)} />
          </div>
        </div>
      )}

      {/* Edit user modal */}
      {editUser && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setEditUser(null)}>Close</button>
            <EditUserForm user={editUser} setUsers={setEditUser} closeModal={() => setEditUser(null)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
