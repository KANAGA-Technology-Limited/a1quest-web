'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const BackComponent = ({
  containerClass,
  text = 'Back',
  destination,
  showText = true,
  useDefaultBack = true,
}: {
  containerClass?: string;
  text?: string;
  showText?: boolean;
  destination?: string;
  useDefaultBack?: boolean;
}) => {
  const router = useRouter();
  return (
    <div className={containerClass}>
      <button
        onClick={() => (useDefaultBack ? router.back() : router.push(destination || ''))}
        className='flex items-center gap-4'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z'
            fill='black'
          />
        </svg>
        {showText && <span className='text-lg'>{text}</span>}
      </button>
    </div>
  );
};

export default BackComponent;
