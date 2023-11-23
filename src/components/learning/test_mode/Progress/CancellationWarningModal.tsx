'use client';

import Button from '@/common/Button/Button';
import CustomModal from '@/common/CustomModal/CustomModal';
import { exitTestMode } from '@/store/features/testMode';
import { useAppDispatch } from '@/store/hooks';
import { TestStage } from '@/types/test_mode';
import React from 'react';

const CancellationWarningModal = ({
  onClose,
  open,
  setTestStage,
}: {
  open: boolean;
  onClose: () => void;
  setTestStage: React.Dispatch<React.SetStateAction<TestStage>>;
}) => {
  const dispatch = useAppDispatch();
  return (
    <CustomModal
      isOpen={open}
      onRequestClose={onClose}
      width='575px'
      resizeBody={false}
      showTitle={false}
    >
      <div className='flex flex-col w-full items-center text-center py-10 px-5'>
        <h4 className='text-xl md:text-2xl font-semibold mb-2'>Hey there!</h4>
        <p className='text-[#797979] font-normal mb-10'>
          You&apos;re doing really well. If you stop now you will forfeit the progress
          you&apos;ve made
        </p>
        <div className='flex flex-col gap-4'>
          <Button className='!w-[168px]' onClick={onClose}>
            Continue test
          </Button>
          <Button
            className='!w-[168px] !bg-[#E6E6E6] !text-black hover:!bg-error hover:!text-white'
            onClick={() => {
              dispatch(exitTestMode());
              setTestStage('initialization');
            }}
          >
            Exit test
          </Button>
        </div>
      </div>
    </CustomModal>
  );
};

export default CancellationWarningModal;
