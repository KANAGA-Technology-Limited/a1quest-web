'use client';
import CustomModal from '@/common/CustomModal/CustomModal';
import { exitTestMode } from '@/store/features/testMode';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import React, { useEffect, useRef, useState } from 'react';
import TestInitialization from './TestInitialization';
import { TestCreationType, TestStage } from '@/types/test_mode';
import { SubTopicType, TopicType } from '@/types/data';
import TestProgress from './Progress/TestProgress';

const TestModeModal = () => {
  const { open } = useAppSelector((state) => state.testMode);
  const dispatch = useAppDispatch();
  const [testStage, setTestStage] = useState<TestStage>('progress');
  const [createdTest, setCreatedTest] = useState<TestCreationType | undefined>(undefined);
  const [testTopic, setTestTopic] = useState<TopicType | undefined>(undefined);
  const [testSubtopic, setTestSubTopic] = useState<SubTopicType | undefined>(undefined);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

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
    >
      <div className='p-[3vw]'>
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
          />
        )}
      </div>
    </CustomModal>
  );
};

export default TestModeModal;
