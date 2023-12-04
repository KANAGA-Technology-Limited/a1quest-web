'use client';

import Button from '@/common/Button/Button';
import CustomModal from '@/common/CustomModal/CustomModal';
import { TestStage } from '@/types/test_mode';
import React, { useEffect, useState } from 'react';

const ForcedSubmissionModal = ({
  submitTest,
  testDuration,
  testStage,
  timerCount,
}: {
  submitTest: (askCheck?: boolean) => void;
  timerCount: number;
  testDuration: number;
  testStage: TestStage;
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (testStage === 'progress' && timerCount >= testDuration * 60) {
      submitTest(false);
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerCount, testDuration, testStage]);

  return (
    <CustomModal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      width='575px'
      resizeBody={false}
      showTitle={false}
      shouldCloseOnOverlayClick={false}
    >
      <div className='flex flex-col w-full items-center text-center py-10 px-5'>
        <h4 className='text-xl md:text-2xl font-semibold mb-2'>Hey there!</h4>
        <p className='text-[#797979] font-normal mb-10'>
          You&apos;ve exceeded the time limit for this test. As a result, your current
          progress has been submitted and the test has been ended
        </p>
        <div className='flex flex-col gap-4'>
          <Button className='!w-[168px]' onClick={() => setOpen(false)}>
            I understand
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default ForcedSubmissionModal;
