import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import policyImage from '@/assets/images/legal/cookie-policy.svg';
import Image from 'next/image';
import PolicyList from '@/components/cookie-policy/PolicyList';

const CookiePolicyPage = () => {
  return (
    <AppLayout staticHeader>
      <header className='legal-header-bg px-primary flex items-center py-[34px] text-white justify-center md:justify-between text-center md:text-left flex-col md:flex-row gap-10'>
        <div>
          <h1 className='font-bold font-secondary mb-1 text-[48px] md:text-[56px] lg:text-[64px]'>
            Cookie Policy
          </h1>
          <p className='text-2xl md:text-3xl lg:text-4xl'>We value your privacy</p>
        </div>
        <div>
          <Image src={policyImage} alt='privacy' />
        </div>
      </header>
      <PolicyList />
    </AppLayout>
  );
};

export default CookiePolicyPage;
