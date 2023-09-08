import React from 'react';
import DefinitionImage from '@/assets/images/home/definition.webp';
import Image from 'next/image';
import Button from '@/common/Button/Button';

const Definition = () => {
  return (
    <section
      id='definition'
      className='px-primary py-[100px] flex items-center flex-wrap justify-center bg-[#06102B] text-white lg:flex-nowrap gap-[104px]'
    >
      <div className='lg:flex-[50%]'>
        <Image
          src={DefinitionImage}
          alt=''
          className='w-full h-full object-cover rounded-[10px] max-h-[602px]'
        />
      </div>
      <div className='flex flex-col gap-5 lg:flex-[50%]'>
        <h2 className='text-[32px] md:text-[48px] lg:text-[56px] font-bold'>
          What is A1Quest?
        </h2>
        <p className='text-[#E6E6E6]'>
          Lorem ipsum dolor sit amet consectetur. Tristique interdum id tempor erat et est
          pellentesque. Mauris lectus tempor et non blandit lacus donec lectus ac. Nibh
          sed egestas amet feugiat eu. Proin dictumst quam aliquet odio odio est.
          Scelerisque magna suscipit.
        </p>
        <Button className='!text-primary !bg-white'>Button</Button>
      </div>
    </section>
  );
};

export default Definition;
