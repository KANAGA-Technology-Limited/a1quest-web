import React from 'react';
import AdvantageImage from '@/assets/images/home/advantage.webp';
import Image from 'next/image';
import { AdvantageList } from './data';
import { TickIcon } from '@/icons';

const AdvantageSection = () => {
  return (
    <div className='bg-[#E8EDFB80] px-primary py-[100px] flex lg:justify-between flex-wrap lg:flex-nowrap justify-center items-center gap-20'>
      <div className='lg:flex-[50%]'>
        <h2 className='text-[32px] md:text-[48px] lg:text-[56px] font-extrabold mb-6 text-[#242424] text-center lg:text-left'>
          Advantages for parents
        </h2>
        <ul className='flex flex-col gap-6 '>
          {AdvantageList.map((item) => (
            <li key={item.title} className='flex items-start gap-6'>
              <div>
                <TickIcon />
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-[#242424] font-medium'>{item.title}</p>
                <p className='text-[#3C3C3C] font-light'>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='lg:flex-[50%]'>
        <Image
          src={AdvantageImage}
          alt='Advantage'
          className='w-full rounded-[20px] object-cover'
        />
      </div>
    </div>
  );
};

export default AdvantageSection;
