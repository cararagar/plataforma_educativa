import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();
  return (
    <div className="container mt-4">
      <h2>Panel del Administrador: {user.username}</h2>
      <p>Aquí puedes gestionar usuarios, cursos y configuraciones generales de la plataforma.</p>
      {/* Agrega más funcionalidades específicas para el administrador según sea necesario */}
    </div>
  );
};

export default AdminDashboard;
