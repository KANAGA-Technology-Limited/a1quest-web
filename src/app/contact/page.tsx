import AppLayout from '@/components/layout/AppLayout';
import Image from 'next/image';
import React from 'react';
import TwitterIcon from '@/assets/icons/help/twitter.svg';
import FacebookIcon from '@/assets/icons/help/facebook.svg';
import InstagramIcon from '@/assets/icons/help/instagram.svg';
import HelpForm from '@/components/help/HelpForm';

const ContactPage = () => {
  return (
    <AppLayout backgroundColor='#F3F3F3'>
      <div className='flex flex-col items-center text-center gap-[10px] w-full mb-10 pt-[161px]'>
        <h1 className='text-primaryDark font-extrabold text-[40px] md:text-[50px] lg:text-[60px] font-secondary'>
          Contact us
        </h1>
        <p className='text-[#797979] font-normal'>
          Any question or remarks? You can write us a message!
        </p>
      </div>
      <div className='px-primary  pb-[56px]'>
        <div className='bg-white pb-[43px] p-5 md:pb-[63px] md:p-10 rounded-2xl grid grid-cols-1 lg:grid-cols-2 items-center gap-[62px]'>
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
          <HelpForm showHeader={false} />
        </div>
      </div>
    </AppLayout>
  );
};

export default ContactPage;
