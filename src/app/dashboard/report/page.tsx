import PageTitle from '@/common/PageTitle';
import StyledTabs from '@/common/StyledTabs';
import UserPerformance from '@/components/report/UserPerformance';
import UserReport from '@/components/report/UserReport';
import UserTestLog from '@/components/report/UserTestLog';
import React from 'react';

const tabs = ['Performance', 'Report', 'Test Log'];
const panels = [
  <UserPerformance key='Performance' />,
  <UserReport key='Report' />,
  <UserTestLog key='Test Log' />,
];

const ReportPage = () => {
  return (
    <>
      <PageTitle title='Report & Analytics' />
      <StyledTabs tabs={tabs} panels={panels} />
    </>
  );
};

export default ReportPage;
