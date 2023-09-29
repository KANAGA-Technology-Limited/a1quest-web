'use client';
import React, { useMemo } from 'react';
import SubscriptionIcon from '@/assets/icons/account/subscription-time.svg';
import Image from 'next/image';
import { SubscriptionType } from '@/types/data';
import {
  formatNumberToNaira,
  getDateDifferenceInDays,
} from '@/functions/stringManipulations';
import { useAppSelector } from '@/store/hooks';

const TimeCard = ({ plan }: { plan: SubscriptionType | undefined }) => {
  const { user } = useAppSelector((state) => state.user);

  const dateDifference = useMemo(
    () =>
      getDateDifferenceInDays(
        user?.subscription?.nextPaymentDate || '',
        user?.subscription?.lastPaymentDate || ''
      ),
    [user]
  );

  const percentageDifference = useMemo(
    () => (dateDifference / (plan?.duration || 1)) * 100,
    [plan, dateDifference]
  );

  if (!user) return null;
  if (!plan) return null;

  return (
    <div className='subscribe-bg rounded-lg p-6 pb-11 w-full'>
      <div className='flex items-center justify-between mb-[60px] w-full'>
        <div className='flex flex-col gap-[6px]'>
          <Image src={SubscriptionIcon} alt='Subscription' />
          <p className='capitalize text-white text-xl font-medium'>
            {plan.subscriptionPlan} plan
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <span className='text-white font-semibold text-[36px]'>
            {formatNumberToNaira(plan.subscriptionAmount)}
          </span>
          <span className='text-[#E6E6E6] font-medium'>/{plan.duration}days</span>
        </div>
      </div>
      {user.subscription?.active ? (
        <>
          {' '}
          {/* Date Difference */}
          <p className='mb-2 text-[#F7F8F9] font-medium'>
            {dateDifference} of{' '}
            {dateDifference > plan.duration ? dateDifference : plan.duration} days
          </p>
          <div className='w-[70%] rounded bg-[#FCEED4] max-w-full h-2'>
            <div
              className='bg-secondary rounded max-w-full h-2'
              style={{
                width: `${percentageDifference}%`,
              }}
            />
          </div>
        </>
      ) : (
        <p className=' font-medium text-error'>INACTIVE</p>
      )}
    </div>
  );
};

export default TimeCard;
