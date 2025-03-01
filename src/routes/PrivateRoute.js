import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ allowedRoles, redirectPath = '/login', children }) => {
  const { user } = useAuth();
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to={redirectPath} />;
  }
  return children ? children : <Outlet />;
};

export default PrivateRoute;
