import React from 'react';
import { PricingType } from './data';
import { formatNumberToNaira } from '@/functions/stringManipulations';
import Link from 'next/link';
import Button from '@/common/Button/Button';

const PricingCard = ({ pricing }: { pricing: PricingType }) => {
  return (
    <div className='py-7 px-8 flex flex-col items-center !w-[273.152px] bg-white rounded-lg gap-8'>
      <p className='text-xl text-[#242424] font-semibold'>{pricing.title}</p>
      <p className='text-[32px] text-[#0C1F56] font-semibold'>
        {formatNumberToNaira(pricing.price)}
      </p>
      <p className='text-[#64748B] '>{pricing.cycle}</p>
      <Link href='/auth/register'>
        <Button>Get started</Button>
      </Link>
    </div>
  );
};

export default PricingCard;
