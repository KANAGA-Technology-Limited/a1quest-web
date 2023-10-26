import React from 'react';
import { formatNumberToNaira } from '@/functions/stringManipulations';
import Link from 'next/link';
import Button from '@/common/Button/Button';
import { SubscriptionType } from '@/types/data';

const PricingCard = ({ pricing }: { pricing: SubscriptionType }) => {
  return (
    <div className='py-7 px-8 flex flex-col items-center !w-[273.152px] bg-white rounded-lg gap-8'>
      <p className='text-xl text-[#242424] font-semibold capitalize'>
        {pricing.subscriptionPlan} Plan
      </p>
      <p className='text-[32px] text-[#0C1F56] font-semibold'>
        {formatNumberToNaira(pricing.subscriptionAmount)}
      </p>
      <p className='text-[#64748B] '>Billed every {pricing.duration} days</p>
      <Link href='/auth/register'>
        <Button>Get started</Button>
      </Link>
    </div>
  );
};

export default PricingCard;
