import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark" role="banner">
      <div className="container">
        <Link className="navbar-brand" to="/">Plataforma Educativa</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Alternar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarNav" role="navigation">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">Cursos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
