import React from 'react';
import NotFoundImage from '@/assets/images/404.svg';
import AppLayout from '@/components/layout/AppLayout';
import Image from 'next/image';
import Link from 'next/link';

const PageNotFound = () => {
  return (
    <AppLayout>
      <div className='w-full flex py-[100px] flex-col px-primary items-center justify-center text-center'>
        <Image
          src={NotFoundImage}
          alt='Not found'
          className='max-w-full object-contain mb-10'
        />
        <h1 className='text-[#3C3C3C] font-extrabold text-xl md:text-2xl mb-5 max-w-[810px]'>
          Oops! It looks like the page you wanted is missing. It&apos;s gone for a coffee
          break.
        </h1>
        <p className='text-[#5B5B5B] font-normal max-w-[810px]'>
          Let&apos;s get back to the{' '}
          <Link href='/' className='text-primary font-semibold'>
            homepage
          </Link>
          . Or, if you want, you can check out other pages. Don&apos;t worry, even
          websites make mistakes sometimes. Thanks for being cool about it!
        </p>
      </div>
    </AppLayout>
  );
};

export default PageNotFound;
