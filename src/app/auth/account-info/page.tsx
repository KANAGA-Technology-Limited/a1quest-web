import React from 'react';
import AccountImage from '@/assets/backgrounds/account.svg';
import Image from 'next/image';
import AccountInfoForm from '@/components/account-info/AccountInfoForm';
import WelcomeTag from '@/components/account-info/WelcomeTag';
import PrivateRoute from '@/components/auth/routeChecker/PrivateRoute';

const AccountInfoPage = () => {
  return (
    <PrivateRoute>
      <div className='px-primary py-[60px] w-full h-[219.75px] relative'>
        <Image
          src={AccountImage}
          alt=''
          className='absolute top-0 left-0 right-0 bottom-0 -z-10 w-auto min-h-full object-cover'
        />
        <div className='text-center lg:text-left text-white'>
          <WelcomeTag />
          <p>To get started on your learning, we need some of information from you.</p>
        </div>
      </div>
      <AccountInfoForm />
    </PrivateRoute>
  );
};

export default AccountInfoPage;
