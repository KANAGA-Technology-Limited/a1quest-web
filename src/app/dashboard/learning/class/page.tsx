import BackComponent from '@/common/BackComponent';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import ClassTopics from '@/components/learning/class/ClassTopics';
import React from 'react';

const LearningClassPage = () => {
  return (
    <DashboardLayout>
      <BackComponent />
      <ClassTopics />
    </DashboardLayout>
  );
};

export default LearningClassPage;
