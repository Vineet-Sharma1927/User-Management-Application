// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserDetailPage from './pages/UserDetailPage';
import './styles.css';  // Custom styling for the app

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the home page listing all users */}
        <Route path="/" element={<HomePage />} />

        {/* Route for viewing the detailed user page */}
        <Route path="/user/:id" element={<UserDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
