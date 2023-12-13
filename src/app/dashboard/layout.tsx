import PrivateRoute from '@/components/auth/routeChecker/PrivateRoute';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import React from 'react';

const DashboardBaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivateRoute>
      <DashboardLayout>{children}</DashboardLayout>
    </PrivateRoute>
  );
};

export default DashboardBaseLayout;
