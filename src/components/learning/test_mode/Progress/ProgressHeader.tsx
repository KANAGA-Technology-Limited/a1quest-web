'use client';
import React, { useState } from 'react';
import { CloseIcon } from '../icons';
import CancellationWarningModal from './CancellationWarningModal';
import ProgressIndicators from './ProgressIndicators';
import { TestCreationType, TestStage } from '@/types/test_mode';

const ProgressHeader = ({
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
  const [openWarning, setOpenWarning] = useState(false);
  return (
    <div className='pt-[60px] px-primary'>
      <div className='relative w-full flex justify-center flex-col gap-10 md:flex-row '>
        <button
          onClick={() => setOpenWarning(true)}
          className='md:absolute md:left-0 md:bottom-0 md:top-0 flex items-center justify-center group'
        >
          <CloseIcon className='group-hover:[&>path]:fill-error duration-300' />
        </button>
        <ProgressIndicators
          createdTest={createdTest}
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
        />
      </div>
      <CancellationWarningModal
        open={openWarning}
        onClose={() => setOpenWarning(false)}
        setTestStage={setTestStage}
      />
    </div>
  );
};

export default ProgressHeader;
