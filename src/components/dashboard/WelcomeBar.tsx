'use client';

import React from 'react';
import WelcomeImage from '@/assets/images/dashboard/welcome-image.png';
import WaveEmoji from '@/assets/images/dashboard/waving emoji.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';

const WelcomeBar = () => {
  const { user } = useAppSelector((state) => state.user);
  return (
    <header className='bg-[#F7D593] rounded-xl flex items-center flex-wrap md:flex-nowrap justify-center md:justify-between text-center md:text-left mb-[60px]'>
      <div className='px-10 py-7'>
        <h1 className='flex items-center gap-[13px] text-lg md:text-xl lg:text-2xl font-semibold text-[#50390D] mb-2 justify-center md:justify-start'>
          <span>
            Good day to you <span className='capitalize'>{user?.firstName}</span>!
          </span>
          <Image src={WaveEmoji} alt='wave' />
        </h1>
        <p className='text-[#191D23] font-normal mb-3 max-w-[550px] text-sm md:text-base'>
          Embrace the Day, Knowledge Seeker! Your Journey to Greatness begins with a
          Single Step. Take that Step Today and Unveil Your Potential.
        </p>
        <p className='text-[#4B5768] text-sm'>
          Don&apos;t forget to invite your friends to{' '}
          <Link href='/dashboard/profile/?tab=1' className='text-primary font-extrabold'>
            earn
          </Link>
        </p>
      </div>
      <div>
        <Image src={WelcomeImage} alt='welcome' />
      </div>
    </header>
  );
};

export default WelcomeBar;
