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
}: {
  conductCheck?: boolean;
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
        <Button
          className='self-end'
          disabled={!user?.school || !user.guardianFullName || !user.goal}
          onClick={() => router.replace(destination)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default AccountInfoForm;
