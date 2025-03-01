import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import WelcomeComponent from '../common/WelcomeComponent';

const ResponsiveLayout = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4" role="main">
        {/* Componente de bienvenida con cambio de idioma */}
        <WelcomeComponent />
        {/* Aquí se renderizan las rutas hijas, si existiesen */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ResponsiveLayout;
