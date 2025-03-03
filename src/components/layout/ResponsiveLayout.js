// src/components/layout/ResponsiveLayout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const ResponsiveLayout = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4" role="main">
        {/* Aquí se renderizan las rutas hijas */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ResponsiveLayout;
