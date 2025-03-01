import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';

const UserDashboard = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="container mt-4">
      <h2>{t('dashboard')} - {user.username}</h2>
      <p>{t('role')}: {user.role}</p>

      <section className="mb-4">
        <h3>{t('my_courses')}</h3>
        <p>{t('manage_courses')}</p>
      </section>

      <section className="mb-4">
        <h3>{t('study_materials')}</h3>
        <p>{t('access_materials')}</p>
      </section>

      <section className="mb-4">
        <h3>{t('forums')}</h3>
        <p>{t('participate_forums')}</p>
      </section>
    </div>
  );
};

export default UserDashboard;
