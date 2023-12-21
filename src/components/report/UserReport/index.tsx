'use client';
import LoadingIndicator from '@/common/LoadingIndicator';
import React, { useEffect, useState } from 'react';
import ReportCard from './ReportCard';
import { sendCatchFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import { LessonReportType } from '@/types/test_mode';
import TabSwitch from '@/common/TabSwitch';
import LessonGraph from './LessonGraph';

const UserReport = () => {
  const [data, setData] = useState<LessonReportType[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<string>('All');

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/report-analytics/topics');
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
      ) : data && data.length > 0 ? (
        <>
          <TabSwitch
            tabs={['All', ...data.map((item) => item.title)]}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
          {selectedTab === 'All' && (
            <div className='grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
              {data.map((item) => (
                <ReportCard data={item} key={item._id} />
              ))}
            </div>
          )}
          {selectedTab !== 'All' && (
            <LessonGraph
              id={data.find((item) => item.title === selectedTab)?._id || ''}
            />
          )}
        </>
      ) : (
        <p>No report found</p>
      )}
    </>
  );
};

export default UserReport;
