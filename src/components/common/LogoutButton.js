// src/components/common/LogoutButton.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Cierra la sesión
    navigate('/login'); // Redirige a la página de login
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Salir de la sesión
    </button>
  );
};

export default LogoutButton;
