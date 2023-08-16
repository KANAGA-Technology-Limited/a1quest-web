'use client';
import React, { useEffect, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';
import CheckedIcon from '@/assets/icons/auth/goal-check.svg';
import UncheckedIcon from '@/assets/icons/auth/goal-unchecked.svg';
import Image from 'next/image';

const GoalCard = ({
  goal,
  selected,
  onChange,
}: {
  goal: number;
  selected: boolean;
  onChange: () => void;
}) => {
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  return (
    <div
      className='w-full border-primary border rounded-md bg-white p-4 flex gap-[10px] cursor-pointer hover:bg-gray-200 duration-300'
      onClick={onChange}
    >
      <Image
        src={selected ? CheckedIcon : UncheckedIcon}
        alt={selected ? 'Selected' : 'Not Selected'}
        ref={parentRef}
      />
      <span>{goal} minutes per day</span>
    </div>
  );
};

export default GoalCard;
