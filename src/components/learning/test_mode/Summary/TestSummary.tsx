import React from 'react';
import SummaryBar from './SummaryBar';
import { TestCreationType, TestStage } from '@/types/test_mode';
import SummaryCard from './SummaryCard';
import { SubTopicType, TopicType } from '@/types/data';

const TestSummary = ({
  createdTest,
  setTestStage,
  testSubtopic,
  testTopic,
}: {
  createdTest: TestCreationType | undefined;
  setTestStage: React.Dispatch<React.SetStateAction<TestStage>>;
  testTopic: TopicType | undefined;
  testSubtopic: SubTopicType | undefined;
}) => {
  return (
    <>
      <SummaryCard
        createdTest={createdTest}
        testSubtopic={testSubtopic}
        testTopic={testTopic}
        setTestStage={setTestStage}
      />
      <SummaryBar createdTest={createdTest} setTestStage={setTestStage} />
    </>
  );
};

export default TestSummary;
