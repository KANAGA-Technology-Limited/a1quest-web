import React from 'react';
import ProgressHeader from './ProgressHeader';
import { TestCreationType } from '@/types/test_mode';

const TestProgress = ({
  createdTest,
  selectedQuestion,
  setSelectedQuestion,
}: {
  createdTest: TestCreationType | undefined;
  selectedQuestion: number;
  setSelectedQuestion: React.Dispatch<React.SetStateAction<number>>;
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
      />
    </>
  );
};

export default TestProgress;
