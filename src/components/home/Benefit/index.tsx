import React from 'react';
import { BenefitsList } from './data';

const BenefitSection = () => {
  return (
    <section id='benefit' className='lg:px-primary lg:py-20 bg-[#FFF]'>
      <div className='bg-[#302208] lg:rounded-[30px] px-[5vw] flex flex-col items-center w-full pt-[74px] pb-[100px] text-white'>
        <h2 className='mb-[10px] font-bold text-[32px] lg:text-[48px] font-secondary text-center'>
          Benefits of A1 Quest
        </h2>
        <p className='font-light text-white max-w-[770px] mb-[68px] text-center'>
          Whether you&apos;re a parent or guardian seeking to improve your child&apos;s or
          ward&apos;s mathematical prowess or a learner yourself, the A1Quest provides
          holistic and engaging solutions that aid in acquiring mathematical knowledge.
        </p>
        <div className='grid gap-[50px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mb-[60px]'>
          {BenefitsList.slice(0, 3).map((benefit) => (
            <div key={benefit.title} className='flex flex-col text-white'>
              {benefit.icon}
              <p className='font-medium text-xl md:text-2xl mt-4 mb-3'>{benefit.title}</p>
              <p className='font-light text-[15px] max-w-[331px]'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div className='flex gap-[50px] flex-col md:flex-row justify-center'>
          {BenefitsList.slice(3).map((benefit) => (
            <div key={benefit.title} className='flex flex-col text-white'>
              {benefit.icon}
              <p className='font-medium text-xl md:text-2xl mt-4 mb-3'>{benefit.title}</p>
              <p className='font-light text-[15px] max-w-[331px]'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
