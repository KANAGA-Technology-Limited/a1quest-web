'use client';
import CustomModal from '@/common/CustomModal/CustomModal';
import { exitTestMode } from '@/store/features/testMode';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useEffect, useRef, useState } from 'react';
import TestInitialization from './TestInitialization';
import { QuestionListType, TestCreationType, TestStage } from '@/types/test_mode';
import { SubTopicType, TopicType } from '@/types/data';
import TestProgress from './Progress/TestProgress';
import autoAnimate from '@formkit/auto-animate';
import TestSummary from './Summary/TestSummary';
import { sendCatchFeedback, sendFeedback } from '@/functions/feedback';
import { appAxios } from '@/api/axios';
import ForcedSubmissionModal from './Progress/ForcedSubmissionModal';

const TestModeModal = () => {
  const { open } = useAppSelector((state) => state.testMode);
  const dispatch = useAppDispatch();
  const [testStage, setTestStage] = useState<TestStage>('initialization');
  const [createdTest, setCreatedTest] = useState<TestCreationType | undefined>(undefined);
  const [testTopic, setTestTopic] = useState<TopicType | undefined>(undefined);
  const [testSubtopic, setTestSubTopic] = useState<SubTopicType | undefined>(undefined);
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const parentRef = useRef(null);
  const [questionList, setQuestionList] = useState<QuestionListType | undefined>(
    undefined
  );
  const [submitLoading, setSubmitLoading] = useState(false);
  const [timerCount, setTimerCount] = useState(0);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  // Reset on close
  useEffect(() => {
    if (!open) {
      setSelectedQuestion(0);
      setCreatedTest(undefined);
      setTestSubTopic(undefined);
      setTestTopic(undefined);
      setTestStage('initialization');
      setQuestionList(undefined);
      setTimerCount(0);
      setSubmitLoading(false);
    }
  }, [open]);

  const submitTest = (askCheck?: boolean) => {
    const operation = async () => {
      try {
        setSubmitLoading(true);
        await appAxios.post(`/learning/tests/${createdTest?._id}/answers`, {
          answers: questionList
            ? Object.keys(questionList).map((question_id) => ({
                question_id,
                answer: questionList[question_id].answer,
              }))
            : [],
          time: timerCount / 60, // collected in minutes
        });
        setTestStage('concluded');
        sendFeedback('Test Submitted', 'success');
      } catch (error) {
        sendCatchFeedback(error);
      } finally {
        setSubmitLoading(false);
      }
    };
    if (askCheck) {
      if (confirm('Are you sure you want to submit this test')) {
        operation();
      }
    } else {
      operation();
    }
  };

  return (
    <CustomModal
      isOpen={open}
      onRequestClose={() => dispatch(exitTestMode())}
      width='100vw'
      height='100vh'
      maxWidth='100vw'
      maxHeight='100vh'
      shouldCloseOnEsc={false}
      shouldCloseOnOverlayClick={false}
      showTitle={false}
      borderRadius={1}
      backgroundColor='#F3F3F3'
      paddingTop={0}
      padding={0}
      childrenClass='relative'
    >
      <div ref={parentRef} className='h-screen relative'>
        {testStage === 'initialization' && (
          <TestInitialization
            setTestStage={setTestStage}
            setCreatedTest={setCreatedTest}
            createdTest={createdTest}
            testTopic={testTopic}
            setTestTopic={setTestTopic}
            testSubtopic={testSubtopic}
            setTestSubTopic={setTestSubTopic}
          />
        )}
        {testStage === 'progress' && (
          <TestProgress
            createdTest={createdTest}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            setTestStage={setTestStage}
            setQuestionList={setQuestionList}
            questionList={questionList}
            submitTest={submitTest}
            submitLoading={submitLoading}
            timerCount={timerCount}
            setTimerCount={setTimerCount}
            testSubtopic={testSubtopic}
            testTopic={testTopic}
          />
        )}
        {testStage === 'concluded' && (
          <TestSummary
            createdTest={createdTest}
            setTestStage={setTestStage}
            testTopic={testTopic}
            testSubtopic={testSubtopic}
          />
        )}

        <ForcedSubmissionModal
          submitTest={submitTest}
          timerCount={timerCount}
          testDuration={testSubtopic?.test_duration || testTopic?.test_duration || 0}
          testStage={testStage}
        />
      </div>
    </CustomModal>
  );
};

export default TestModeModal;
