import PageTitle from '@/common/PageTitle';
import TopicSection from '@/components/dashboard/TopicSection';
import WelcomeBar from '@/components/dashboard/WelcomeBar';
import RecentLearning from '@/components/learning/class/RecentLearning';
import React from 'react';

const DashboardPage = () => {
  return (
    <>
      <PageTitle title='Home' />
      <WelcomeBar />
      <RecentLearning showTitle limit={1} />
      <TopicSection />
    </>
  );
};

export default DashboardPage;
