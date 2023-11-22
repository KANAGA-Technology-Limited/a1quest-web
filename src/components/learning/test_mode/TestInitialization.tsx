import React, { useEffect, useState } from 'react';
import { sendCatchFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { TestCreationType, TestStage } from '@/types/test_mode';
import LoadingIndicator from '@/common/LoadingIndicator';
import Button from '@/common/Button/Button';
import { exitTestMode } from '@/store/features/testMode';
import { BackIcon } from './icons';
import { SubTopicType, TopicType } from '@/types/data';

const TestInitialization = ({
  setTestStage,
  setCreatedTest,
  createdTest,
  setTestSubTopic,
  setTestTopic,
  testSubtopic,
  testTopic,
}: {
  setTestStage: React.Dispatch<React.SetStateAction<TestStage>>;
  createdTest: TestCreationType | undefined;
  setCreatedTest: React.Dispatch<React.SetStateAction<TestCreationType | undefined>>;
  testTopic: TopicType | undefined;
  setTestTopic: React.Dispatch<React.SetStateAction<TopicType | undefined>>;
  testSubtopic: SubTopicType | undefined;
  setTestSubTopic: React.Dispatch<React.SetStateAction<SubTopicType | undefined>>;
}) => {
  const [loading, setLoading] = React.useState(true);
  const { topicId, subtopicId, open } = useAppSelector((state) => state.testMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const createTest = async () => {
      try {
        setLoading(true);
        const response = await appAxios.post('/learning/take-test', {
          ...(topicId && {
            topic_id: topicId,
          }),
          ...(subtopicId && {
            sub_topic_id: subtopicId,
          }),
        });

        setCreatedTest(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    if (open && (topicId || subtopicId)) {
      createTest();
    }
  }, [subtopicId, topicId, setCreatedTest, open]);

  const closeTest = () => {
    dispatch(exitTestMode());
  };

  // Get topic details
  useEffect(() => {
    const getTopicDetails = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/learning/view-topic/' + topicId);
        setTestTopic(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    if (topicId) {
      getTopicDetails();
    }
  }, [setTestTopic, topicId]);

  // Get subtopic details
  useEffect(() => {
    const getSubtopicDetails = async () => {
      try {
        setLoading(true);
        const response = await appAxios.get('/learning/view-sub-topic/' + subtopicId);
        setTestSubTopic(response.data.data);
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setLoading(false);
      }
    };

    if (subtopicId) {
      getSubtopicDetails();
    }
  }, [setTestSubTopic, subtopicId]);

  return (
    <div className='w-full h-full'>
      <button
        className='flex items-center gap-4 text-lg md:text-xl font-medium'
        onClick={closeTest}
      >
        <BackIcon />
        <span>Back</span>
      </button>
      <div className='flex w-full h-full justify-center items-center mt-[88px]'>
        <div className='w-[575px] max-w-[full] bg-white rounded-xl p-[60px]'>
          {loading ? (
            <LoadingIndicator size={60} />
          ) : createdTest ? (
            <>
              <h3 className='text-xl md:text-2xl font-semibold mb-6'>
                Test your knowledge on{' '}
                {testSubtopic ? testSubtopic.title : testTopic?.title || 'this topic'}
              </h3>
              {/* <p>INSTRUCTIONS</p>
              {
                testTopic.
              } */}
              <Button onClick={() => setTestStage('progress')} className='mt-10'>
                Begin
              </Button>
            </>
          ) : (
            <div className='flex flex-col text-center items-center w-full'>
              <h3 className='text-xl md:text-2xl font-semibold mb-6'>
                We couldn&apos;t create a test for you
              </h3>
              <p className='text-[#191D23] mb-10 font-normal'>Please try again later</p>
              <Button onClick={closeTest}>Exit Test</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestInitialization;
