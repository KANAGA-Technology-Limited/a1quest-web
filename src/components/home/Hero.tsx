import React from 'react';
import HeroImage from '@/assets/images/home/hero.webp';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/common/Button/Button';

const Hero = () => {
  return (
    <div className='px-primary flex justify-between gap-5 hero-bg flex-wrap lg:flex-nowrap items-end 3xl:items-center'>
      <div className='pt-[210px] flex items-center md:items-start flex-col gap-6 pb-[178px] xl:flex-[65%] 2xl:flex-[65%]'>
        <h1 className='font-extrabold text-center md:text-left text-[60px] md:text-[72px] lg:text-[96px]'>
          Unlock the <span className='text-primary'>magic</span> of{' '}
          <span className='math-bg'>maths</span>
        </h1>
        <p className='text-center md:text-left text-[#323A46] text-xl'>
          Empower your learning journey with our maths platform
        </p>
        <Link href='/auth/register'>
          <Button>Get started</Button>
        </Link>
      </div>
      <div className='pt-[100px] h-full xl:flex-[35%] 2xl:flex-[35%] hidden xl:flex'>
        <Image
          src={HeroImage}
          alt='Woman smiling'
          className='w-auto h-full object-cover flex-1 grow'
        />
      </div>
    </div>
  );
};

export default Hero;
