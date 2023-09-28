'use client';
import Button from '@/common/Button/Button';
import { formatNumberToNaira } from '@/functions/stringManipulations';
import { SubscriptionType } from '@/types/data';
import Image from 'next/image';
import React from 'react';
import planIcon from '@/assets/icons/subscription/plan.svg';
import { useAppSelector } from '@/store/hooks';

const SubscriptionCard = ({
  plan,
  setSelectedPlan,
  setSubscribeModalState,
}: {
  plan: SubscriptionType | undefined;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSubscribeModalState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user } = useAppSelector((state) => state.user);

  if (!plan) return null;
  return (
    <div className='w-full p-[25px] flex flex-col pb-[31px] rounded-[10px] bg-white border border-[#24242426] text-center items-center'>
      <Image src={planIcon} alt='Plan Icon' className='mb-4' />
      <p className='capitalize text-[#06102B] font-semibold text-xl mb-5'>
        {plan.subscriptionPlan} plan
      </p>
      <p className='text-[#0C1F56] text-[32px] font-semibold mb-[2px]'>
        {formatNumberToNaira(plan.subscriptionAmount || 0)}
      </p>
      <p className='text-[#64748B] mb-8'>Billed every {plan.duration} days</p>
      {user?.subscription?.plan === plan._id ? (
        <p className='font-bold text-2xl text-center uppercase'>
          {user?.subscription?.active ? (
            <span className='text-success'>Active</span>
          ) : (
            <span className='text-error'>Not Active</span>
          )}
        </p>
      ) : (
        <Button
          onClick={() => {
            setSelectedPlan(plan._id);
            setSubscribeModalState(true);
          }}
        >
          Subscribe
        </Button>
      )}
    </div>
  );
};

export default SubscriptionCard;
