import MailText from '@/common/MailText';
import React from 'react';

const Header = () => {
  return (
    <header className='faq-header-bg pt-[200px] px-primary flex flex-col items-center pb-[153.07px]'>
      <h1 className='mb-[10] text-primaryDark text-[40px] md:text-[50p] lg:text-[60px] xl:text-[64px] font-secondary font-extrabold'>
        Questions? Look here.
      </h1>
      <p className='text-[#5B5B5B] font-normal'>
        Can&apos;t find the answers you&apos;re looking for? email us at <MailText />
      </p>
    </header>
  );
};

export default Header;
