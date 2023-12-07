import AppLayout from '@/components/layout/AppLayout';
import Image from 'next/image';
import TermsImage from '@/assets/images/legal/terms.svg';
import React from 'react';
import TermsTable from '@/components/terms/TermsTable';
import TermsList from '@/components/terms/TermsList';

const TermsPage = () => {
  return (
    <AppLayout staticHeader>
      <header className='legal-header-bg px-primary flex items-center py-[34px] text-white justify-center md:justify-between text-center md:text-left flex-col md:flex-row gap-10'>
        <div>
          <h1 className='font-bold font-secondary mb-1 text-[48px] md:text-[56px] lg:text-[64px]'>
            Terms of Use
          </h1>
          <p className='text-2xl md:text-3xl lg:text-4xl'>
            Your guide to getting the most out of our services
          </p>
        </div>
        <div>
          <Image src={TermsImage} alt='terms' />
        </div>
      </header>
      <div className='py-[56px] px-primary flex flex-col md:flex-row gap-[72px] w-full items-start'>
        <TermsTable />
        <TermsList />
      </div>
    </AppLayout>
  );
};

export default TermsPage;
