import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import ManagerDashboard from './ManagerDashboard';
import UserDashboard from './UserDashboard';

function Dashboard() {
  const { role } = useParams();
  
  // Extract trailing part of dashboard/* using location
  const pathParts = window.location.pathname.split('/');
  const activeRole = pathParts[pathParts.length - 1];

  if (activeRole === 'admin') return <AdminDashboard />;
  if (activeRole === 'manager') return <ManagerDashboard />;
  if (activeRole === 'user') return <UserDashboard />;
  
  // If the user manually navigated to /dashboard or an invalid role, redirect to login
  return <Navigate to="/login" />;
}

export default Dashboard;
