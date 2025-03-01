import React from 'react';
import { useTranslation } from 'react-i18next';

const WelcomeComponent = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container mt-4">
      <h1>{t('welcome_message')}</h1>
      <button className="btn btn-primary me-2" onClick={() => changeLanguage('es')}>
        Español
      </button>
      <button className="btn btn-secondary" onClick={() => changeLanguage('en')}>
        English
      </button>
    </div>
  );
};

export default WelcomeComponent;
