import Image, { StaticImageData } from 'next/image';
import React from 'react';
import LoginImage from '@/assets/images/auth/login.svg';
import Logo from '@/assets/brand/logo.svg';
import Link from 'next/link';
import ProtectedRoute from './routeChecker/ProtectedRoute';

const AuthLayout = ({
  children,
  image,
}: {
  image?: StaticImageData;
  children: React.ReactNode;
}) => {
  return (
    <ProtectedRoute>
      <div className='flex lg:flex-nowrap flex-wrap items-center justify-between lg:h-screen '>
        <div className='px-primary py-10 flex flex-col md:min-h-full md:max-h-screen items-center lg:items-start text-center lg:text-left overflow-y-auto lg:flex-[50%] w-full'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='A1Quest Logo'
              className=' w-[200px] h-auto mb-32'
              height={50}
            />
          </Link>
          {children}
        </div>
        <div className='hidden lg:block lg:h-screen w-full lg:flex-[50%]'>
          <Image
            src={image || LoginImage}
            alt='Welcome to A1Quest'
            className='lg:h-screen w-full object-cover max-w-full'
          />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AuthLayout;
