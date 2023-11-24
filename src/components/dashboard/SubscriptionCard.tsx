'use client';
import Button from '@/common/Button/Button';
import Link from 'next/link';
import React from 'react';

const SubscriptionCard = () => {
  return (
    <div className='w-full p-6 pb-11 rounded-lg bg-white border border-[#24242433] mt-[60px]'>
      <p className='text-sm text-[#3C3C3C] mb-4'>Subscription Status</p>
      <p className='text-error font-semibold text-xl mb-[50px]'>INACTIVE</p>
      <Link href='/dashboard/account/?tab=2'>
        <Button>Manage subscriptions</Button>
      </Link>
    </div>
  );
};

export default SubscriptionCard;
