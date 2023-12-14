import React from 'react';
import UniquenessCard from './UniquenessCard';
import { dataList } from './data';

const UniquenessSection = () => {
  return (
    <section
      id='uniqueness'
      className='pt-[100px] px-primary flex items-center flex-col w-full bg-[#BBCAF34D]'
    >
      <div className='text-xl text-[#E8EDFB] font-medium px-4 py-3 bg-[#06102B] rounded-[24px] mb-[17px]'>
        Our Uniqueness
      </div>
      <h2 className='font-bold text-[32px] md:text-[48px] lg:text-[56px] text-center mb-[54px]'>
        Why we&apos;re better than our competitors
      </h2>
      <div className='competition-bg px-primary w-full'>
        <div className='flex justify-between gap-10 items-center flex-col md:flex-row w-full mb-[100px] md:pl-[5.6vw]'>
          {dataList.slice(0, 2).map((item) => (
            <UniquenessCard key={item.title} item={item} />
          ))}
        </div>
        <div className='flex justify-between gap-10 items-center flex-col md:flex-row w-full mb-10 md:pr-[5.6vw]'>
          {dataList.slice(2).map((item) => (
            <UniquenessCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniquenessSection;
