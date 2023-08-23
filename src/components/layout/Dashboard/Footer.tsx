import React from 'react';
import Logo from '@/assets/brand/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks, footerLinks } from './footerLinks';

const Footer = () => {
  return (
    <div className='w-full bg-white px-primary py-[66px]'>
      <div className='flex flex-col gap-10 items-center'>
        <div className='grid grid-cols-1 lg:grid-cols-3 w-full items-center place-items-center lg:items-start lg:place-items-stretch gap-10 lg:gap-0'>
          <Link href='/'>
            <Image
              src={Logo}
              alt='A1Quest Logo'
              className='w-[165px] h-auto object-contain'
            />
          </Link>
          <div className='flex gap-10 items-start justify-center flex-wrap'>
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
          <div className='flex gap-6 items-center justify-end'>
            {SocialLinks.map((link, index) => (
              <a href={link.href || '#'} key={index} target='_blank'>
                <Image src={link.image} alt='A1Quest Social Icon' />
              </a>
            ))}
          </div>
        </div>
        <span className='text-[#64748B] text-[13px]'>
          &copy; Copyright {new Date().getFullYear()} A1Quest
        </span>
      </div>
    </div>
  );
};

export default Footer;
