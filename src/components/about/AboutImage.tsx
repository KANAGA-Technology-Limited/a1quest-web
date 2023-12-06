import React from 'react';
import AboutImageFile from '@/assets/images/about/about.svg';
import Image from 'next/image';

const AboutImage = () => {
  return (
    <div className='md:flex-[48%] w-full'>
      <Image src={AboutImageFile} alt='A1quest learning' />
    </div>
  );
};

export default AboutImage;
