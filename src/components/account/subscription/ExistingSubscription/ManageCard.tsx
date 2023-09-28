'use client';
import Button from '@/common/Button/Button';
import { useAppSelector } from '@/store/hooks';
import React from 'react';

const ManageCard = ({
  setSubscribeModalState,
}: {
  setSubscribeModalState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className='w-full p-6 pb-11 rounded-lg bg-white border border-[#24242433]'>
      <p className='text-sm text-[#3C3C3C] mb-4'>Next Subscription</p>
      <p className='text-[#242424] font-semibold text-xl mb-[50px]'>
        {new Date(user?.subscription?.nextPaymentDate || '').toDateString()}
      </p>
      <Button onClick={() => setSubscribeModalState(true)}>Manage subscriptions</Button>
    </div>
  );
};

export default ManageCard;
