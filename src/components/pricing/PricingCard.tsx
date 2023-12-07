import React from 'react';
import { formatNumberToNaira } from '@/functions/stringManipulations';
import Link from 'next/link';
import Button from '@/common/Button/Button';
import { SubscriptionType } from '@/types/data';
import { CheckIcon } from '@/icons';

const PricingCard = ({ pricing }: { pricing: SubscriptionType }) => {
  const popularPlan = pricing.duration === 90;
  return (
    <div
      className='pb-10 p-8 flex flex-col w-full lg:max-w-[317px] bg-[#E6E6E6] rounded-2xl !min-w-fit'
      style={{
        backgroundColor: popularPlan ? '#E8EDFB' : '#E6E6E6',
        border: popularPlan ? '2px solid #1D4ED8' : 'none',
      }}
    >
      <p className='text-xl text-[#242424] font-medium capitalize mb-6'>
        {pricing.subscriptionPlan} Plan
      </p>
      <p className='text-[24px] md:text-[32px] lg:text-[36px] mb-8 text-[#0D0F11] font-semibold'>
        {formatNumberToNaira(pricing.subscriptionAmount)}
      </p>
      <p className='text-[#64748B] mb-6 flex items-center gap-[10px] font-normal'>
        <CheckIcon />
        <span>Unlimited access for {pricing.duration} days</span>
      </p>
      <Link href='/auth/register'>
        <Button
          className='!w-full'
          style={{
            backgroundColor: popularPlan ? 'var(--primary)' : '#06102B',
            color: '#fff',
          }}
        >
          Get started
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;
