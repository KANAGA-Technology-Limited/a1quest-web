import HelpForm from '@/components/help/HelpForm';
import DashboardLayout from '@/components/layout/Dashboard/DashboardLayout';
import React from 'react';
import TwitterIcon from '@/assets/icons/help/twitter.svg';
import FacebookIcon from '@/assets/icons/help/facebook.svg';
import InstagramIcon from '@/assets/icons/help/instagram.svg';
import Image from 'next/image';

const HelpPage = () => {
  return (
    <DashboardLayout pageTitle='Help & Support'>
      <div className='bg-white pb-[43px] p-5 md:pb-[63px] md:p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-2 items-center gap-[62px]'>
        <HelpForm />
        <div className='help-bg rounded-lg flex flex-col p-5 md:p-10 h-full min-h-[500px]'>
          <h2 className='text-secondary font-semibold text-xl md:text-[28px] mb-[58px]'>
            Contact Information
          </h2>
          <div className='flex flex-col gap-2'>
            <span className='text-white text-lg md:text-2xl font-semibold'>
              a1quest@gmail.com
            </span>
            <span className='text-[#DADADA]'>
              You can send a mail directly to us and we&apos;ll get in touch in no time.
            </span>
          </div>
          <div className='flex flex-col gap-2 mt-10'>
            <span className='text-white text-lg md:text-2xl font-semibold'>
              +234 000 0000 000
            </span>
            <span className='text-[#DADADA]'>
              You can call us directly if you need urgent help and our agents will help
              you
            </span>
          </div>
          <div className='mt-auto flex items-center gap-6 flex-wrap'>
            <a href='#' target='_blank'>
              <Image src={TwitterIcon} alt='Twitter' />
            </a>
            <a href='#' target='_blank'>
              <Image src={FacebookIcon} alt='Facebook' />
            </a>
            <a href='#' target='_blank'>
              <Image src={InstagramIcon} alt='Instagram' />
            </a>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpPage;
