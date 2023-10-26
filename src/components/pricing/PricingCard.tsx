import React from 'react';
import { formatNumberToNaira } from '@/functions/stringManipulations';
import Link from 'next/link';
import Button from '@/common/Button/Button';
import { SubscriptionType } from '@/types/data';

const PricingCard = ({ pricing }: { pricing: SubscriptionType }) => {
  const popularPlan = pricing.duration === 90;
  return (
    <div
      className='py-7 px-8 flex flex-col items-center w-full !max-w-full bg-white rounded-lg gap-8 border border-[#24242426] relative'
      style={{
        backgroundColor: popularPlan ? '#06102B' : 'white',
      }}
    >
      <p
        className='text-xl text-[#242424] font-semibold capitalize'
        style={{
          color: popularPlan ? 'var(--secondary)' : '#242424',
        }}
      >
        {pricing.subscriptionPlan} Plan
      </p>
      <p
        className='text-[32px] text-[#0C1F56] font-semibold'
        style={{
          color: popularPlan ? '#fff' : '#0C1F56',
        }}
      >
        {formatNumberToNaira(pricing.subscriptionAmount)}
      </p>
      <p
        className='text-[#64748B]'
        style={{
          color: popularPlan ? '#E7EAEE' : '#64748B',
        }}
      >
        Billed every {pricing.duration} days
      </p>
      <Link href='/auth/register'>
        <Button
          style={{
            backgroundColor: popularPlan ? 'var(--secondary)' : 'var(--primary)',
            color: popularPlan ? '#000' : '#fff',
          }}
        >
          Get started
        </Button>
      </Link>

      {popularPlan && (
        <aside className='absolute top-3 right-3 rounded bg-secondary text-black w-[58.36px] h-[28.49px] flex items-center justify-center font-semibold text-[11.49px]'>
          Popular
        </aside>
      )}
    </div>
  );
};

export default PricingCard;
