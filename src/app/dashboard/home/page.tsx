import TopicSection from '@/components/dashboard/TopicSection';
import WelcomeBar from '@/components/dashboard/WelcomeBar';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import React from 'react';

const DashboardPage = () => {
  return (
    <DashboardLayout pageTitle='Home'>
      <WelcomeBar />
      <TopicSection />
    </DashboardLayout>
  );
};

export default DashboardPage;
