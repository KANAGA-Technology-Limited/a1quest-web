'use client';

import Image from 'next/image';
import React from 'react';
import checkIcon from '@/assets/icons/subscription/check.svg';
import SubscriptionPlans from './SubscriptionPlans';
import { useAppSelector } from '@/store/hooks';
import ExistingSubscription from './ExistingSubscription';

const benefits = [
  'Enjoy unlimited access to quality and rich learning resources',
  'Gain access to assignment help feature',
  'Prepare adequately for upcoming examinations',
  'Earn badges and unlock new achievement',
];

const AccountSubscription = () => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) return null;
  return (
    <>
      {user?.subscription?.active ? (
        <ExistingSubscription />
      ) : (
        <>
          <div className='mb-[60px] flex flex-col gap-4'>
            {benefits.map((benefit) => (
              <div key={benefit} className='flex items-center gap-2 '>
                <Image src={checkIcon} alt='Check Mark' />
                <span className='text-[#64748B]'>{benefit}</span>
              </div>
            ))}
          </div>
          <SubscriptionPlans />
        </>
      )}
    </>
  );
};

export default AccountSubscription;
