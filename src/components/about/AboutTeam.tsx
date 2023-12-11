import React from 'react';
import { DetailList } from './data';

const AboutTeam = () => {
  return (
    <div className='bg-[#0C1F56] px-primary py-20'>
      <h2 className='text-[#F5F5F5] text-[28px] mf:text-[36px] lg:text-[48px] text-center font-semibold mb-6'>
        Meet the Exceptional Team Behind A1Quest
      </h2>
      <p className='text-[#E6E6E6] font-normal text-center mb-[60px]'>
        At A1Quest, we firmly believe that every successful educational application is a
        product of a remarkable team of committed professionals. Our journey to
        revolutionize maths education has been powered by a group of individuals who share
        an unwavering passion for innovation, education, and making a meaningful impact on
        students&apos; lives. Here&apos;s an introduction to the exceptional teams that
        brought A1Quest into existence:
      </p>
      <div className='grid gap-[50px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mb-[60px]'>
        {DetailList.slice(0, 3).map((detail) => (
          <div key={detail.title} className='flex flex-col gap-3'>
            <p className='text-[#F5F5F5] font-semibold text-2xl md:text-[32px]'>
              {detail.title}
            </p>
            <p className='text-[#F0F0F0] font-light text-[15px]'>{detail.description}</p>
          </div>
        ))}
      </div>
      <div className='flex gap-[50px] flex-col md:flex-row justify-center'>
        {DetailList.slice(3).map((detail) => (
          <div key={detail.title} className='flex flex-col gap-3'>
            <p className='text-[#F5F5F5] font-semibold text-2xl md:text-[32px]'>
              {detail.title}
            </p>
            <p className='text-[#F0F0F0] font-light text-[15px] max-w-[380px]'>
              {detail.description}
            </p>
          </div>
        ))}
      </div>
      <p className='text-white font-normal mt-[60px]'>
        Together, these teams have poured their collective passion, expertise, and
        dedication into creating A1Quest - a groundbreaking application that is redefining
        the way students learn and embrace maths. We are immensely proud of our team and
        deeply appreciative of their steadfast commitment to making maths accessible,
        enjoyable, and empowering for all.
      </p>
    </div>
  );
};

export default AboutTeam;
