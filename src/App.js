// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Home from './components/home/home';
import Login from './components/auth/Login';
import UserDashboard from './components/dashboard/UserDashboard';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import Contact from './components/contact/Contact';
import ResponsiveLayout from './components/layout/ResponsiveLayout';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta pública de Home */}
          <Route path="/" element={<Home />} />
          {/* Ruta de Login */}
          <Route path="/login" element={<Login />} />

          {/* Rutas protegidas */}
          <Route element={<PrivateRoute allowedRoles={['student', 'teacher', 'admin']} />}>
            <Route element={<ResponsiveLayout />}>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/profesor" element={<TeacherDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/contacto" element={<Contact />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
