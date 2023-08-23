import React from 'react';
import Logo from '@/assets/brand/logo-small.svg';
import Image from 'next/image';
import Link from 'next/link';
import Streak from './Streak';
import Notification from './Notification';
import User from './User';

const Navbar = ({ pageTitle }: { pageTitle?: string }) => {
  return (
    <nav className='h-[72px] flex w-full items-center justify-stretch py-[13px] px-secondary shadow-sm'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center gap-5'>
          <Link href='/dashboard' className='md:hidden'>
            <Image src={Logo} alt='A1Quest Logo' className='h-8 w-8 object-contain' />
          </Link>
          <p className='text-lg lg:text-[25px] font-semibold text-[#191D23]'>
            {pageTitle || 'A1 Quest'}
          </p>
        </div>
        <div className='flex items-center justify-end md:gap-8 gap-4'>
          <Streak />
          <Notification />
          <User />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
