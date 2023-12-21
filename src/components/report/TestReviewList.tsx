'use client';
import { appAxios } from '@/api/axios';
import LoadingIndicator from '@/common/LoadingIndicator';
import { sendCatchFeedback } from '@/functions/feedback';
import { TestReviewType } from '@/types/test_mode';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import QuestionCard from './QuestionCard';
import PerformanceSummary from './PerformanceSummary';

const TestReviewList = () => {
  const searchParams = useSearchParams();
  const testId = searchParams.get('id');
  const [loading, setLoading] = useState(true);
  const [testReview, setTestView] = useState<TestReviewType | undefined>(undefined);

  useEffect(() => {
    const getTestReview = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get(`/learning/tests/${testId}/review`);
        setTestView(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    if (testId) {
      getTestReview();
    }
  }, [testId]);

  return (
    <div>
      {loading ? (
        <LoadingIndicator text='Fetching Test Results' size={40} align='center' />
      ) : testReview ? (
        <>
          <PerformanceSummary testReview={testReview} />
          <div className='flex flex-col w-full gap-10 mt-10'>
            {testReview.questions.map((question, index) => (
              <>
                <QuestionCard question={question} index={index} />
                {index < testReview.questions.length - 1 && (
                  <div className='w-full bg-[#B5B5B5] h-[1px] ' />
                )}
              </>
            ))}
          </div>
        </>
      ) : (
        <p>Couldn&apos;t find this test&apos;s report</p>
      )}
    </div>
  );
};

export default TestReviewList;
