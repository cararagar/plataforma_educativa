// src/components/layout/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../common/LogoutButton';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { user } = useAuth();
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark" role="banner">
      <div className="container">
        <Link className="navbar-brand" to="/">{t('site.title')}</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">{t('header.dashboard')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">{t('header.contact')}</Link>
            </li>
            {/* Botón de cambio de idioma con grupo de botones */}
            <li className="nav-item">
              <div className="btn-group ms-3" role="group" aria-label={t('header.language')}>
                <button 
                  type="button" 
                  className="btn btn-outline-light"
                  onClick={() => changeLanguage('es')}
                >
                  ES
                </button>
                <button 
                  type="button" 
                  className="btn btn-outline-light"
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </button>
              </div>
            </li>
            {user && (
              <li className="nav-item ms-3">
                <LogoutButton />
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
