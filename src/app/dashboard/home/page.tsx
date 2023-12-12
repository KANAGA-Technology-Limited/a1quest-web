import PageTitle from '@/common/PageTitle';
import TopicSection from '@/components/dashboard/TopicSection';
import WelcomeBar from '@/components/dashboard/WelcomeBar';
import React from 'react';

const DashboardPage = () => {
  return (
    <>
      <PageTitle title='Home' />
      <WelcomeBar />
      <TopicSection />
    </>
  );
};

export default DashboardPage;
