'use client';
import { useAppSelector } from '@/store/hooks';
import React from 'react';

const WelcomeTag = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <h1 className='font-semibold text-[24px] md:text-[30px] lg:text-[40px] mb-2'>
      Welcome to A1Quest, {user?.firstName}
    </h1>
  );
};

export default WelcomeTag;
