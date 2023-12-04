import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import TestReviewList from '@/components/report/TestReviewList';
import React from 'react';

const TestReviewPage = () => {
  return (
    <DashboardLayout showBackButton pageTitle='Review Test Performance'>
      <TestReviewList />
    </DashboardLayout>
  );
};

export default TestReviewPage;
