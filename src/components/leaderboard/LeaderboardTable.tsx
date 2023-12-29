'use client';

import { appAxios } from '@/api/axios';
import Table from '@/common/Table';
import { sendCatchFeedback } from '@/functions/feedback';
import { LeaderboardType } from '@/types/data';
import React, { useCallback, useEffect, useState } from 'react';
import { BronzeIcon, GoldIcon, SilverIcon } from './icons';
import { TimeFilterType } from './types';
import TimeFilter from './TimeFilter';
import { addDayToDate } from '@/functions/date';

const LeaderboardTable = () => {
  const tableHeaders = ['S/N', 'username', 'badge', 'percentage(%)'];
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = useState<LeaderboardType[] | undefined>(undefined);
  const [timeFilter, setTimeFilter] = useState<TimeFilterType>('weekly');

  const getData = async () => {
    let startDate: Date | string | undefined = '';
    let endDate: Date | string | undefined = '';

    if (timeFilter === 'weekly') {
      startDate = addDayToDate(new Date(), -10);
      endDate = addDayToDate(new Date(), 1);
    }
    if (timeFilter === 'daily') {
      startDate = addDayToDate(new Date(), -1);
      endDate = addDayToDate(new Date(), 1);
    }
    if (timeFilter === 'monthly') {
      startDate = addDayToDate(new Date(), -30);
      endDate = addDayToDate(new Date(), 1);
    }
    if (timeFilter === 'yearly') {
      startDate = addDayToDate(new Date(), -366);
      endDate = addDayToDate(new Date(), 1);
    }

    try {
      setLoading(true);
      const response = await appAxios.get(
        `/leaderboards/?start_date=${startDate}&end_date=${endDate}`
      );

      setData(response.data.data);
    } catch (error) {
      sendCatchFeedback(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeFilter]);

  const getIndex = useCallback((index: number) => {
    if (index + 1 === 1)
      return (
        <div className='w-20 flex justify-center'>
          <GoldIcon />
        </div>
      );
    if (index + 1 === 2)
      return (
        <div className='w-20 flex justify-center'>
          <SilverIcon />
        </div>
      );
    if (index + 1 === 3)
      return (
        <div className='w-20 flex justify-center'>
          <BronzeIcon />
        </div>
      );

    return (
      <div className='w-20 flex justify-center font-semibold text-xl'>{index + 1}</div>
    );
  }, []);

  return (
    <>
      <TimeFilter setTimeFilter={setTimeFilter} timeFilter={timeFilter} />
      <Table
        tableHeaders={tableHeaders}
        data={
          data
            ? data.map((item, index) => ({
                'S/N': () => getIndex(index),
                username: item.userName,
                'percentage(%)': item.average_score.toFixed(1).toString(),
                badge: 'Badge',
              }))
            : []
        }
        loading={loading}
      />
    </>
  );
};

export default LeaderboardTable;
