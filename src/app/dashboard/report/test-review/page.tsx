import PageTitle from '@/common/PageTitle';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import TestReviewList from '@/components/report/TestReviewList';
import React from 'react';

const TestReviewPage = () => {
  return (
    <>
      <PageTitle title='Review Test Performance' showBackButton />
      <TestReviewList />
    </>
  );
};

export default TestReviewPage;
