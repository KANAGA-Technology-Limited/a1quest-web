import React from 'react';
import AchievementIcon from '@/assets/icons/profile/achievements/achievement.svg';
import Image from 'next/image';
import ProgressLevel from '@/common/ProgressLevel';

const AchievementCard = () => {
  return (
    <div className='w-full px-5 py-7 lg:px-[41px] lg:py-[38px] flex items-center justify-between bg-white border border-[#E7EAEE] rounded-[10px]'>
      <div className='flex items-center flex-wrap md:flex-nowrap gap-[21px] w-full'>
        <div className='bg-[#985DD8] w-20 h-20 items-center flex justify-center rounded-[12px]'>
          <Image
            className='w-[50px] h-[50px] object-contain'
            alt=''
            src={AchievementIcon}
          />
        </div>
        <div className='flex flex-col lg:w-[60%]'>
          <span className='text-primaryDark font-semibold text-lg md:text-xl'>
            Level Badge
          </span>
          <p className='mb-[14px] mt-[2px] text-[#323A46] text-sm'>
            Attempt 50 questions
          </p>
          <ProgressLevel level={50} />
        </div>
      </div>
      <span className='text-[#0D0F11] text-xl md:text-2xl font-semibold'>26/50</span>
    </div>
  );
};

export default AchievementCard;
