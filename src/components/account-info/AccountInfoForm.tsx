'use client';

import React from 'react';
import SchoolInfoForm from './SchoolInfoForm';
import GuardianInfoForm from './GuardianInfoForm';
import GoalInfoForm from './GoalInfoForm';
import { useAppSelector } from '@/store/hooks';
import Button from '@/common/Button/Button';
import { useRouter } from 'next/navigation';

const AccountInfoForm = ({
  conductCheck = true,
  containerClass,
  contentClass,
  destination = '/dashboard',
  showCancel = false,
}: {
  conductCheck?: boolean;
  showCancel?: boolean;
  containerClass?: string;
  contentClass?: string;
  destination?: string;
}) => {
  const { user } = useAppSelector((state) => state.user);
  const router = useRouter();
  return (
    <div className={'px-primary flex justify-center w-full py-[100px] ' + containerClass}>
      <div
        className={
          'flex flex-col gap-10 lg:max-w-[70vw] items-center w-full ' + contentClass
        }
      >
        <SchoolInfoForm conductCheck={conductCheck} />
        <GuardianInfoForm conductCheck={conductCheck} />
        <GoalInfoForm conductCheck={conductCheck} />
        <div className='self-end flex items-center gap-6'>
          {showCancel && (
            <Button
              className='!bg-transparent !text-primary !w-fit'
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          )}
          <Button
            disabled={!user?.school || !user.guardianFullName || !user.goal}
            onClick={() => router.replace(destination)}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoForm;
