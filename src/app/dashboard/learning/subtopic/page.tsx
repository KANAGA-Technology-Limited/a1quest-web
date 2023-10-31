import BackComponent from '@/common/BackComponent';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import SubTopicDetail from '@/components/learning/SubTopicDetail';
import LessonList from '@/components/learning/LessonList';
import React from 'react';

const LearningSubtopicsPage = () => {
  return (
    <DashboardLayout>
      <BackComponent />
      <SubTopicDetail />
      <LessonList />
    </DashboardLayout>
  );
};

export default LearningSubtopicsPage;
