'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { TopicPerformanceType } from '@/types/test_mode';
import React, { useEffect, useState } from 'react';
import GeneralPerformance from './GeneralPerformance';
import GeneralSummary from './GeneralSummary';

const UserPerformance = () => {
  const [data, setData] = useState<TopicPerformanceType | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>('All');

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/report-analytics/performance');
        setData(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingIndicator text='Fetching Lesson Reports' />
      ) : data ? (
        <>
          {/* <TabSwitch
            tabs={['All', ...data.map((item) => item.title)]}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          /> */}
          {selectedTab === 'All' && (
            <div className='bg-white p-10 mt-10 rounded-lg w-full'>
              <GeneralPerformance data={data} />
              <GeneralSummary data={data} />
            </div>
          )}
          {/* {selectedTab !== 'All' && (
            <LessonGraph
              id={data.find((item) => item.title === selectedTab)?._id || ''}
            />
          )} */}
        </>
      ) : (
        <p>No report found</p>
      )}
    </>
  );
};

export default UserPerformance;
