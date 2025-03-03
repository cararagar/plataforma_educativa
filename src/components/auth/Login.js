// src/components/auth/Login.js
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = false;
    let role = 'student';

    // Validación de credenciales según el usuario y contraseña
    if (username.toLowerCase() === 'admin') {
      if (password === 'admin') {
        role = 'admin';
        valid = true;
      }
    } else if (username.toLowerCase() === 'profesor') {
      if (password === 'profesor') {
        role = 'teacher';
        valid = true;
      }
    } else {
      // Para cualquier otro usuario (estudiante) la contraseña debe ser "alumno"
      if (password === 'alumno') {
        role = 'student';
        valid = true;
      }
    }

    if (!valid) {
      alert('Credenciales incorrectas');
      return;
    }

    // Simulación de autenticación exitosa
    // En un entorno real llamarías a una API y manejarías la respuesta
    login(username, role); // Llama a la función login del AuthContext para actualizar el estado

    // Redirige según el rol validado
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'teacher') {
      navigate('/profesor');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Usuario</label>
          <input 
            type="text" 
            className="form-control" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input 
            type="password" 
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
