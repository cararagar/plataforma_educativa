// src/components/contact/Contact.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-4">
      <h2>{t('contact_title')}</h2>
      <p>{t('contact_description')}</p>
      <form>
        <div className="mb-3">
          <label className="form-label">{t('name')}</label>
          <input type="text" className="form-control" placeholder={t('enter_name')} required />
        </div>
        <div className="mb-3">
          <label className="form-label">{t('email')}</label>
          <input type="email" className="form-control" placeholder={t('enter_email')} required />
        </div>
        <div className="mb-3">
          <label className="form-label">{t('message')}</label>
          <textarea className="form-control" rows="4" placeholder={t('enter_message')} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">{t('send')}</button>
      </form>
    </div>
  );
};

export default Contact;
