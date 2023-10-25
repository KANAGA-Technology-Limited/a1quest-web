import AppLayout from '@/components/layout/AppLayout';
import React from 'react';
import PrivacyImage from '@/assets/images/legal/privacy-policy.svg';
import Image from 'next/image';
import PolicyTable from '@/components/privacy-policy/PolicyTable';
import PolicyList from '@/components/privacy-policy/PolicyList';

const PrivacyPolicyPage = () => {
  return (
    <AppLayout staticHeader>
      <header className='legal-header-bg px-primary flex items-center py-[34px] text-white justify-center md:justify-between text-center md:text-left flex-col md:flex-row gap-10'>
        <div>
          <h1 className='font-bold font-secondary mb-1 text-[48px] md:text-[56px] lg:text-[64px]'>
            Privacy Policy
          </h1>
          <p className='text-2xl md:text-3xl lg:text-4xl'>We value your privacy</p>
        </div>
        <div>
          <Image src={PrivacyImage} alt='privacy' />
        </div>
      </header>
      <div className='py-[56px] px-primary flex flex-col md:flex-row gap-[72px] w-full items-start'>
        <PolicyTable />
        <PolicyList />
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicyPage;
