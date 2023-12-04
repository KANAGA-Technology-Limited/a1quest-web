'use client';
import Button from '@/common/Button/Button';
import { exitTestMode } from '@/store/features/testMode';
import { useAppDispatch } from '@/store/hooks';
import { TestCreationType, TestStage } from '@/types/test_mode';
import { useRouter } from 'next/navigation';
import React from 'react';

const SummaryBar = ({
  createdTest,
  setTestStage,
}: {
  createdTest: TestCreationType | undefined;
  setTestStage: React.Dispatch<React.SetStateAction<TestStage>>;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const closeTest = () => {
    dispatch(exitTestMode());
    setTestStage('initialization');
  };
  return (
    <div className='bg-white absolute left-0 bottom-0 right-0 px-primary py-[33px]'>
      <div className='w-full flex md:justify-between items-center flex-wrap gap-5 justify-center'>
        <Button
          className='!bg-[#E8EDFB] !text-[#191D23] hover:!brightness-90'
          onClick={closeTest}
        >
          Close Test
        </Button>
        <Button
          onClick={() => {
            closeTest();
            router.push(`/dashboard/report/test-review?id=${createdTest?._id || ''}`);
          }}
        >
          Review Performance
        </Button>
      </div>
    </div>
  );
};

export default SummaryBar;
