'use client';
import React, { useCallback, useMemo } from 'react';
import Logo from '@/assets/brand/logo.svg';
import Image from 'next/image';
import navLinks from './navLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LevelBadge from '@/common/LevelBadge';
import { useAppSelector } from '@/store/hooks';
import DefaultImage from '@/assets/icons/profile/default-image.svg';

const Sidebar = () => {
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.user);

  return (
    <aside className='bg-white border-[0.6px] rounded-br-[16px] border-[#B8C0CC] md:w-[35vw] lg:w-[30vw] xl:w-[20vw] px-5 py-8 h-screen overflow-y-auto customized-scrollbar sticky top-0 hidden md:flex md:flex-col'>
      <Link href='/dashboard/home'>
        <Image
          src={Logo}
          alt='A1 Quest Logo'
          height={50}
          className='max-w-[80%] h-auto object-contain mb-5'
        />
      </Link>
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
                  : !pathname.includes(link.href)
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
      {/* User Info */}
      {user && (
        <div className='flex items-center gap-3 pt-6 flex-wrap mt-auto'>
          <Image
            src={user.profilePicture || DefaultImage}
            width={40}
            height={40}
            className='w-10 h-10 rounded-full object-cover'
            alt='Your avatar'
          />
          <div className='flex flex-col'>
            <span className='text-[#06102B] text-sm font-semibold'>
              {user?.firstName + ' ' + user?.lastName}
            </span>
            <span className='text-[#A0ABBB] text-xs'>@{user.userName}</span>
          </div>
          <LevelBadge containerClass='!text-[12px] !px-2 !py-1' />
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
