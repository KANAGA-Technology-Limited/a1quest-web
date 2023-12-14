import React from 'react';
import DefinitionImage from '@/assets/images/home/definition.webp';
import Image from 'next/image';
import Button from '@/common/Button/Button';
import Link from 'next/link';

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
          className='w-full h-full object-contain rounded-[10px] max-h-[602px]'
        />
      </div>
      <div className='flex flex-col lg:flex-[50%] items-center lg:items-start text-center lg:text-left'>
        <h2 className='text-[32px] md:text-[48px] lg:text-[56px] font-bold mb-5'>
          What is A1Quest?
        </h2>
        <p className='text-[#CECECE] mb-10'>
          A1 Quest is a game-changer for both parents and students, transforming the world
          of mathematics education into a thrilling adventure. Our innovative approach not
          only simplifies the learning process but also makes it incredibly engaging.
        </p>
        <Link href='/about'>
          <Button className='!text-primary !bg-white'>Learn more</Button>
        </Link>
      </div>
    </section>
  );
};

export default Definition;
