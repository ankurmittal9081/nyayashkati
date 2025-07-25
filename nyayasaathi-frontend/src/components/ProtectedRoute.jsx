import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;