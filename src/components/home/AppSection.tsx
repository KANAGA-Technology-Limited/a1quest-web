import Image from 'next/image';
import React from 'react';
import AppImage from '@/assets/images/home/app.webp';
import AppleIcon from '@/assets/icons/app/app-store.svg';
import GoogleIcon from '@/assets/icons/app/google-play.svg';

const AppSection = () => {
  return (
    <section
      id='app-download'
      className='px-primary pt-[61px] app-bg flex items-center gap-10 lg:justify-between flex-wrap justify-center lg:flex-nowrap'
    >
      <div className='lg:flex-[50%] x'>
        <h2 className='mb-4 font-bold text-[32px] lg:text-[48px] text-white'>
          Join us on the A1Quest app today
        </h2>
        <p className='text-[#DADADA] mb-8 text-lg'>
          For us, helping our customer to fulfill their needs is number one so that’s why
          we are available on every platform.
        </p>
        <div className='flex items-center gap-6'>
          <a href='#' target='_blank'>
            <Image src={AppleIcon} alt='App Store' />
          </a>
          <a href='#' target='_blank'>
            <Image src={GoogleIcon} alt='Play Store' />
          </a>
        </div>
      </div>
      <div className='lg:flex-[50%]'>
        <Image
          className='w-full h-auto max-h-[558px] object-contain'
          src={AppImage}
          alt='App Image'
        />
      </div>
    </section>
  );
};

export default AppSection;
