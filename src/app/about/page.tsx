import AboutDescription from '@/components/about/AboutDescription';
import AboutImage from '@/components/about/AboutImage';
import AboutTeam from '@/components/about/AboutTeam';
import AppLayout from '@/components/layout/AppLayout';
import React from 'react';

const AboutPage = () => {
  return (
    <AppLayout>
      <div className='flex w-full items-center flex-col-reverse md:flex-row gap-10 md:gap-1 py-[161px] px-primary'>
        <AboutDescription />
        <AboutImage />
      </div>
      <AboutTeam />
    </AppLayout>
  );
};

export default AboutPage;
