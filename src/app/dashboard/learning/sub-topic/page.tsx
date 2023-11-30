import BackComponent from '@/common/BackComponent';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import SubtopicDetail from '@/components/learning/subtopic/SubtopicDetail';
import React from 'react';

const SubTopicPage = () => {
  return (
    <DashboardLayout pageTitle='Sub-Topic Details'>
      <BackComponent />
      <SubtopicDetail />
    </DashboardLayout>
  );
};

export default SubTopicPage;
