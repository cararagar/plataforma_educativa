import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Login from './components/auth/Login';
import UserDashboard from './components/dashboard/UserDashboard';
import TeacherDashboard from './components/dashboard/TeacherDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import ResponsiveLayout from './components/layout/ResponsiveLayout';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ResponsiveLayout />} />

          {/* Rutas protegidas */}
          <Route element={<PrivateRoute allowedRoles={['student', 'teacher', 'admin']} />}>
            <Route path="/dashboard" element={<UserDashboard />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={['teacher']} />}>
            <Route path="/profesor" element={<TeacherDashboard />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
