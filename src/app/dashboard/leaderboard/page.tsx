import PageTitle from '@/common/PageTitle';
import LeaderboardTable from '@/components/leaderboard/LeaderboardTable';

import React from 'react';

const LeaderboardPage = () => {
  return (
    <>
      <PageTitle title='Leaderboard' />
      <LeaderboardTable />
    </>
  );
};

export default LeaderboardPage;
