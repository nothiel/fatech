import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import HomePage from './components/HomePage/HomePage';

import { ProtectedRoute } from './utils/protectedRoute';
import Vote from './components/Vote/Vote';

function App() {
  return (
      <Routes>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<HomePage/>}/>
          <Route path="/projects/vote/:project_id" element={<Vote/>}/>
      </Routes>
  );
}

export default App;