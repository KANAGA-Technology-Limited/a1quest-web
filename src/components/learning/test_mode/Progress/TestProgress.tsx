import React from 'react';
import ProgressHeader from './ProgressHeader';
import { QuestionListType, TestCreationType, TestStage } from '@/types/test_mode';
import TestQuestionPane from './TestQuestionPane';
import ProgressControl from './ProgressControl';
import { SubTopicType, TopicType } from '@/types/data';

const TestProgress = ({
  createdTest,
  selectedQuestion,
  setSelectedQuestion,
  setTestStage,
  setQuestionList,
  questionList,
  submitLoading,
  submitTest,
  setTimerCount,
  timerCount,testSubtopic,testTopic
}: {
  createdTest: TestCreationType | undefined;
  selectedQuestion: number;
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>;
  setTestStage: React.Dispatch<React.SetStateAction<TestStage>>;
  setQuestionList: React.Dispatch<React.SetStateAction<QuestionListType | undefined>>;
  questionList: QuestionListType | undefined;
  submitLoading: boolean;
  submitTest: () => void;
  timerCount: number;
  testTopic: TopicType | undefined;
  testSubtopic: SubTopicType | undefined;
  setTimerCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  // Prevent page reload or exit without confirmation
  React.useEffect(() => {
    const beforeUnloadHandler = (event: Event) => {
      // Cancel the event
      event.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
      // Chrome requires returnValue to be set
      event.returnValue = true;
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);

    return () => {
      return window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, []);

  return (
    <>
      <ProgressHeader
        createdTest={createdTest}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
        setTestStage={setTestStage}
      />
      <TestQuestionPane
        createdTest={createdTest}
        selectedQuestion={selectedQuestion}
        setQuestionList={setQuestionList}
        questionList={questionList}
      />
      <ProgressControl
        createdTest={createdTest}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
        submitTest={submitTest}
        submitLoading={submitLoading}
        timerCount={timerCount}
        setTimerCount={setTimerCount}
        testSubtopic={testSubtopic}
        testTopic={testTopic}
      />
    </>
  );
};

export default TestProgress;
