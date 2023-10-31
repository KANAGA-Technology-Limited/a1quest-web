import React from 'react';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import AllClasses from '@/components/learning/AllClasses';

const LearningPage = () => {
  return (
    <DashboardLayout pageTitle='My Learning'>
      <AllClasses />
    </DashboardLayout>
  );
};

export default LearningPage;
