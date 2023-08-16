import PrivateRoute from '@/components/auth/routeChecker/PrivateRoute';
import React from 'react';

const DashboardBaseLayout = ({ children }: { children: React.ReactNode }) => {
  return <PrivateRoute>{children}</PrivateRoute>;
};

export default DashboardBaseLayout;
