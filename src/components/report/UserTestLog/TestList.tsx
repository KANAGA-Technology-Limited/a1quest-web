'use client';

import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { TestListType } from '@/types/test_mode';
import React, { useEffect, useState } from 'react';
import TestCard from './TestCard';
import Pagination from '@/common/Pagination';

const TestList = () => {
  const [data, setData] = useState<TestListType[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const getTestList = async () => {
      try {
        setLoading(true);
        const response = await appAxios.post('/learning/tests', {
          page,
        });
        setData(response.data.data);
        setTotalResults(response.data?.count);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    getTestList();
  }, [page]);

  return (
    <>
      {loading ? (
        <LoadingIndicator text='Fetching Tests' />
      ) : data && data.length > 0 ? (
        <>
          <div className='grid gap-4 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((item) => (
              <TestCard test={item} key={item._id} />
            ))}
          </div>
          <Pagination page={page} setPage={setPage} totalResults={totalResults} />
        </>
      ) : (
        <p>No test found</p>
      )}
    </>
  );
};

export default TestList;
