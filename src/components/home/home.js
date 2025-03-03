// src/components/home/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLogin = () => {
    navigate('/login');
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container text-center mt-5">
      {/* Botones para cambiar idioma */}
      <div className="d-flex justify-content-end">
        <button 
          className="btn btn-sm btn-outline-primary me-2" 
          onClick={() => changeLanguage('es')}
        >
          ES
        </button>
        <button 
          className="btn btn-sm btn-outline-primary" 
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
      </div>
      <h1>{t('welcome_message')}</h1>
      <p>{t('please_login')}</p>
      <button className="btn btn-primary" onClick={handleLogin}>
        {t('login')}
      </button>
    </div>
  );
};

export default Home;
