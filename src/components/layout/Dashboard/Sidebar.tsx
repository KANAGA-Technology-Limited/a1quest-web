'use client';
import React from 'react';
import Logo from '@/assets/brand/logo.svg';
import Image from 'next/image';
import navLinks from './navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className='bg-white shadow border-r-[#B8C0CC] w-[30vw] lg:w-[20vw] px-5 py-8 h-screen overflow-y-auto customized-scrollbar sticky top-0 rounded-br-[16px] hidden md:block'>
      <Image
        src={Logo}
        alt='A1 Quest Logo'
        className='max-w-[80%] h-auto object-contain mb-5'
      />
      <nav className='flex flex-col gap-3'>
        {navLinks.map((link, index) =>
          link.type === 'divider' ? (
            <div key={index} className='h-[1px] w-full bg-[#B8C0CC] my-3' />
          ) : (
            <Link
              href={link.href}
              key={link.href}
              className={
                link.disabled
                  ? 'duration-300 flex items-center p-3 gap-4 w-full rounded text-[#B8C0CC] pointer-events-none [&>svg>path]:fill-[#B8C0CC]'
                  : pathname !== link.href
                  ? 'duration-300 flex items-center p-3 gap-4 w-full rounded  text-[#4B5768] hover:bg-[#E8EDFB] '
                  : ' duration-300 flex items-center p-3 gap-4 w-full rounded text-primary font-semibold bg-[#E8EDFB] [&>svg>path]:fill-primary'
              }
            >
              {link.icon}
              <span className='flex-1'>{link.label}</span>
              {link.disabled && (
                <div className='text-[8px] text-[#323A46] font-medium p-1 bg-secondary rounded'>
                  coming soon!
                </div>
              )}
            </Link>
          )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
