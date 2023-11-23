import React from 'react';
import ProgressHeader from './ProgressHeader';
import { TestCreationType, TestStage } from '@/types/test_mode';
import TestQuestionPane from './TestQuestionPane';
import ProgressControl from './ProgressControl';

const TestProgress = ({
  createdTest,
  selectedQuestion,
  setSelectedQuestion,
  setTestStage,
}: {
  createdTest: TestCreationType | undefined;
  selectedQuestion: number;
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>;
  setTestStage: React.Dispatch<React.SetStateAction<TestStage>>;
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
      <TestQuestionPane createdTest={createdTest} selectedQuestion={selectedQuestion} />
      <ProgressControl
        createdTest={createdTest}
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={setSelectedQuestion}
        setTestStage={setTestStage}
      />
    </>
  );
};

export default TestProgress;
