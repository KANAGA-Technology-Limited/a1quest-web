import BackComponent from '@/common/BackComponent';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import SubTopicsList from '@/components/learning/SubTopicsList';
import TopicDetail from '@/components/learning/TopicDetail';
import React from 'react';

const LearningTopicsPage = () => {
  return (
    <DashboardLayout>
      <BackComponent />
      <TopicDetail />
      <SubTopicsList />
    </DashboardLayout>
  );
};

export default LearningTopicsPage;
