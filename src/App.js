import React from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { ProtectedRoute } from './utils/protectedRoute';
// import Register from '../Register/Register';

function App() {
  return (
      <Routes>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/login" element={<Login/>} />
      </Routes>
  );
}

export default App;