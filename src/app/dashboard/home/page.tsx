import PopularTopics from '@/components/dashboard/PopularTopics';
import WelcomeBar from '@/components/dashboard/WelcomeBar';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import React from 'react';

const DashboardPage = () => {
  return (
    <DashboardLayout pageTitle='Home'>
      <WelcomeBar />
      <PopularTopics />
    </DashboardLayout>
  );
};

export default DashboardPage;
